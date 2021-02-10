namespace QuizzApp.Models
{
    public class UserChoice
    {
        public int Id { get; set; }
        public int ResultId { get; set; }
        public int QuestionId { get; set; }
        public int AnswerId { get; set; }
    }
}
