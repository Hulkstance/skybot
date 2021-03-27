using FluentValidation;

namespace Skybot.Application.Bots.Commands.Create
{
    public class CreateBotCommandValidator : AbstractValidator<CreateBotCommand>
    {
        public CreateBotCommandValidator()
        {
            RuleFor(x => x.Symbol)
                .NotEmpty().WithMessage("Symbol is required.")
                .MaximumLength(10).WithMessage("Symbol must not exceed 10 characters.");
        }
    }
}
