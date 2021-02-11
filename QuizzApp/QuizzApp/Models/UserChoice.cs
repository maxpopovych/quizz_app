namespace QuizzApp.Models
{
    /// <summary>
    /// User choice model
    /// </summary>
    public class UserChoice
    {
        /// <summary>
        /// Id
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Related result id
        /// </summary>
        public int ResultId { get; set; }
        /// <summary>
        /// Related question id
        /// </summary>
        public int QuestionId { get; set; }
        /// <summary>
        /// Related answer id
        /// </summary>
        public int AnswerId { get; set; }
    }
}
