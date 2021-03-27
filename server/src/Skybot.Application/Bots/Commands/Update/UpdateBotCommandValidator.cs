using FluentValidation;

namespace Skybot.Application.Bots.Commands.Update
{
    public class UpdateBotCommandValidator : AbstractValidator<UpdateBotCommand>
    {
        public UpdateBotCommandValidator()
        {
            RuleFor(x => x.Symbol)
                .NotEmpty().WithMessage("Symbol is required.")
                .MaximumLength(10).WithMessage("Symbol must not exceed 10 characters.");
        }
    }
}
