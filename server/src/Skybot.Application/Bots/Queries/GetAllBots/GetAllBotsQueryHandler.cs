using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Skybot.Application.Bots.Dtos;
using Skybot.Domain.Entities;
using Skybot.Domain.Repositories;
using Skybot.Domain.Specifications;

namespace Skybot.Application.Bots.Queries.GetAllBots
{
    public class GetAllBotsQueryHandler : IRequestHandler<GetAllBotsQuery, IList<BotDto>>
    {
        private readonly IMapper _mapper;
        private readonly IRepository _repository;

        public GetAllBotsQueryHandler(IMapper mapper, IRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public async Task<IList<BotDto>> Handle(GetAllBotsQuery request, CancellationToken cancellationToken)
        {
            var orderedSpec = new OrderedBotsSpecification();

            var bots = await _repository.ListAsync(orderedSpec).ConfigureAwait(false);
            
            return _mapper.Map<List<Bot>, List<BotDto>>(bots);
        }
    }
}
