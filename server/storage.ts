import type { InsertLead, Lead, InsertReview, Review } from "@shared/schema";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  getReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
}

export class MemoryStorage implements IStorage {
  private leads: Lead[] = [];
  private reviews: Review[] = [];
  private nextLeadId = 1;
  private nextReviewId = 1;

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const lead: Lead = {
      id: this.nextLeadId++,
      email: insertLead.email,
      createdAt: new Date(),
    };
    this.leads.push(lead);
    return lead;
  }

  async getReviews(): Promise<Review[]> {
    return [...this.reviews].sort((a, b) => 
      (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0)
    );
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const review: Review = {
      id: this.nextReviewId++,
      name: insertReview.name,
      content: insertReview.content,
      rating: insertReview.rating ?? 5,
      createdAt: new Date(),
    };
    this.reviews.push(review);
    return review;
  }
}

export const storage = new MemoryStorage();
