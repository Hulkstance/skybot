using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Skybot.Application.Bots.Dtos;
using Skybot.Domain.Entities;
using Skybot.Domain.Repositories;

namespace Skybot.Application.Bots.Queries.GetAllBots
{
    public class GetAllBotsQueryHandler : IRequestHandler<GetAllBotsQuery, IList<BotDto>>
    {
        private readonly IRepository _repository;
        private readonly IMapper _mapper;

        public GetAllBotsQueryHandler(IRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IList<BotDto>> Handle(GetAllBotsQuery request, CancellationToken cancellationToken)
        {
            var bots = await _repository.ListAsync<Bot>().ConfigureAwait(false);
            
            return _mapper.Map<List<Bot>, List<BotDto>>(bots);
        }
    }
}
