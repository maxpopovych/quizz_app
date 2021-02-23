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

        /// <summary>
        /// Is objects are equals
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public override bool Equals(object obj)
        {
            return obj is UserChoice choice &&
                   Id == choice.Id &&
                   ResultId == choice.ResultId &&
                   QuestionId == choice.QuestionId &&
                   AnswerId == choice.AnswerId;
        }
    }
}
