using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TalentOnboard.Models
{
    public partial class Stores
    {
        public Stores()
        {
            Sales = new HashSet<Sales>();
        }

        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(50)]
        public string Address { get; set; }

        public virtual ICollection<Sales> Sales { get; set; }
    }
}
