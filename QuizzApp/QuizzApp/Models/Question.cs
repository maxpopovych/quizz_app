using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string question { get; set; }
        public int TestId { get; set; }

    }
}
