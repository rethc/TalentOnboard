using Microsoft.EntityFrameworkCore;

namespace TalentOnboard.Models
{
    public partial class TalentContext : DbContext
    {
        public TalentContext()
        {
        }

        public TalentContext(DbContextOptions<TalentContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customers> Customers { get; set; }
        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<Sales> Sales { get; set; }
        public virtual DbSet<Stores> Stores { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
           //     optionsBuilder.UseSqlServer("Server=DESKTOP-05NP200;Database=Talent;integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customers>(entity =>
            {
                entity.Property(e => e.Address).IsRequired();

                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<Products>(entity =>
            {
                entity.Property(e => e.Name).IsRequired();

                entity.Property(e => e.Price).HasColumnType("decimal(18, 2)");
            });

            modelBuilder.Entity<Sales>(entity =>
            {
                entity.HasIndex(e => e.CustomerId)
                    .HasName("IX_FK_CustomerSales");

                entity.HasIndex(e => e.ProductId)
                    .HasName("IX_FK_ProductSales");

                entity.HasIndex(e => e.StoreId)
                    .HasName("IX_FK_StoreSales");

                entity.Property(e => e.DateSold).HasColumnType("date");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CustomerSales");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProductSales");

                entity.HasOne(d => d.Store)
                    .WithMany(p => p.Sales)
                    .HasForeignKey(d => d.StoreId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_StoreSales");
            });

            modelBuilder.Entity<Stores>(entity =>
            {
                entity.Property(e => e.Address).IsRequired();

                entity.Property(e => e.Name).IsRequired();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
