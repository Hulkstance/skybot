using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Skybot.Application.Bots.Commands.Create;
using Skybot.Application.Bots.Commands.Delete;
using Skybot.Application.Bots.Commands.Update;
using Skybot.Application.Bots.Dtos;
using Skybot.Application.Bots.Queries.GetAllBots;

namespace Skybot.Web.Controllers
{
    public class BotsController : ApiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IList<BotDto>>> GetBots()
        {
            return Ok(await Mediator.Send(new GetAllBotsQuery()).ConfigureAwait(false));
        }

        [HttpPost]
        public async Task<ActionResult<BotDto>> Create(CreateBotCommand command)
        {
            return Ok(await Mediator.Send(command).ConfigureAwait(false));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, UpdateBotCommand command)
        {
            if (id != command.Id)
            {
                return BadRequest();
            }

            await Mediator.Send(command).ConfigureAwait(false);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await Mediator.Send(new DeleteBotCommand { Id = id }).ConfigureAwait(false);

            return NoContent();
        }
    }
}
