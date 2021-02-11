using System.Text.Json.Serialization;

namespace QuizzApp.Models
{
    /// <summary>
    /// Answer model
    /// </summary>
    public class Answer
    {
        /// <summary>
        /// Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Id of related question
        /// </summary>
        public int QuestionId { get; set; }

        /// <summary>
        /// Text of answer
        /// </summary>
        public string text { get; set; }

        /// <summary>
        /// Is answer true
        /// </summary>
        [JsonIgnore]
        public bool isTrue { get; set; }
    }
}
