
namespace QuizzApp.Models
{
    /// <summary>
    /// This class used for authenticate response
    /// </summary>
    public class AuthenticateResponse
    {
        /// <summary>
        /// User id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// User firstname
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// User lastname
        /// </summary>
        public string LastName { get; set; }

        /// <summary>
        /// Username
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Token for authentication
        /// </summary>
        public string Token { get; set; }

        /// <summary>
        /// Class constructor
        /// </summary>
        /// <param name="user"></param>
        /// <param name="token"></param>
        public AuthenticateResponse(User user, string token)
        {
            Id = user.Id;
            FirstName = user.FirstName;
            LastName = user.LastName;
            Username = user.Username;
            Token = token;
        }
    }
}