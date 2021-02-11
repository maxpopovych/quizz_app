using Microsoft.AspNetCore.Mvc;
using QuizzApp.Models;
using QuizzApp.Services;

namespace QuizzApp.Controllers
{
    /// <summary>
    /// User controller
    /// Login logic for admins
    /// </summary>
    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;
        private ApplicationContext db;
        /// <summary>
        /// Class constructor
        /// </summary>
        /// <param name="userService"></param>
        /// <param name="context"></param>
        public UsersController(IUserService userService, ApplicationContext context)
        {
            _userService = userService;
            db = context;
        }
        /// <summary>
        /// Authenticate administrator
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }
        /// <summary>
        /// Get all users
        /// </summary>
        /// <returns></returns>
        [Authorize]
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }
    }
}
