using System.ComponentModel.DataAnnotations;

namespace QuizzApp.Models
{
    /// <summary>
    /// This class used for authenticate request
    /// </summary>
    public class AuthenticateRequest
    {
        /// <summary>
        /// Username
        /// </summary>
        [Required]
        public string Username { get; set; }

        /// <summary>
        /// Password
        /// </summary>
        [Required]
        public string Password { get; set; }
    }
}