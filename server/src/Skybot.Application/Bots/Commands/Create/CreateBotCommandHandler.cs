using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Skybot.Application.Bots.Dtos;
using Skybot.Domain.Entities;

namespace Skybot.Application.Bots.Commands.Create
{
    public class CreateBotCommandHandler : IRequestHandler<CreateBotCommand, BotDto>
    {
        private readonly IMapper _mapper;

        public CreateBotCommandHandler(IMapper mapper)
        {
            _mapper = mapper;
        }

        public Task<BotDto> Handle(CreateBotCommand request, CancellationToken cancellationToken)
        {
            var entity = new Bot
            {
                Symbol = request.Symbol
            };

            throw new NotImplementedException();
        }
    }
}
