using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Skybot.Application.Bots.Dtos;
using Skybot.Domain.Entities;
using Skybot.Domain.Repositories;

namespace Skybot.Application.Bots.Commands.Create
{
    public class CreateBotCommandHandler : IRequestHandler<CreateBotCommand, BotDto>
    {
        private readonly IMapper _mapper;
        private readonly IRepository _repository;

        public CreateBotCommandHandler(IMapper mapper, IRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public async Task<BotDto> Handle(CreateBotCommand request, CancellationToken cancellationToken)
        {
            var entity = new Bot
            {
                Symbol = request.Symbol
            };

            var bot = await _repository.CreateAsync(entity).ConfigureAwait(false);
            await _repository.UnitOfWork.SaveChangesAsync(cancellationToken).ConfigureAwait(false);

            return _mapper.Map<Bot, BotDto>(bot);
        }
    }
}
