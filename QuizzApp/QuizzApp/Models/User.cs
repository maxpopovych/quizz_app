using System.Text.Json.Serialization;

namespace QuizzApp.Models
{
    /// <summary>
    /// User modelN
    /// </summary>
    public class User
    {
        /// <summary>
        /// Id
        /// </summary>
        public int Id { get; set; }

#nullable enable
        /// <summary>
        /// Firstname
        /// </summary>
        public string? FirstName { get; set; }

        /// <summary>
        /// Lastname
        /// </summary>
        public string? LastName { get; set; }
#nullable disable

        /// <summary>
        /// Username
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Password
        /// </summary>
        [JsonIgnore]
        public string Password { get; set; }

        public override bool Equals(object obj)
        {
            return obj is User user &&
                   Id == user.Id &&
                   FirstName == user.FirstName &&
                   LastName == user.LastName &&
                   Username == user.Username &&
                   Password == user.Password;
        }
    }
}