using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace QuizzApp.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string text { get; set; }
        [JsonIgnore]
        public bool isTrue { get; set; }
    }
}
