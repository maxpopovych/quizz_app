using System.Text.Json.Serialization;

namespace QuizzApp.Models
{
    public class User
    {
        public int Id { get; set; }
#nullable enable
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
#nullable disable
        public string Username { get; set; }

        [JsonIgnore]
        public string Password { get; set; }
    }
}