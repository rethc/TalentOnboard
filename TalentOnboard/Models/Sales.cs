using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TalentOnboard.Models
{
    public partial class Sales
    {
        [Key]
        public int Id { get; set; }

        public int CustomerId { get; set; }
        public int StoreId { get; set; }
        public int ProductId { get; set; }

        [Required]
        public DateTime DateSold { get; set; }

        public virtual Customers Customer { get; set; }
        public virtual Products Product { get; set; }
        public virtual Stores Store { get; set; }
    }
}
