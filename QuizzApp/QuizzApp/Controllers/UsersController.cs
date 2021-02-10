using Microsoft.AspNetCore.Mvc;
using QuizzApp.Models;
using QuizzApp.Services;

namespace QuizzApp.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;
        private ApplicationContext db;

        public UsersController(IUserService userService, ApplicationContext context)
        {
            _userService = userService;
            db = context;
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        [Authorize]
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }
    }
}
