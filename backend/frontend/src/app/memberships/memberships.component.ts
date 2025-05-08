import { Component } from '@angular/core';

@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.css'],
})
export class MembershipsComponent {
  membershipPlans = [
    {
      name: 'Basic Plan',
      emoji: '😇',
      price: '$10/month',
      features: ['Access to basic features', 'Email support'],
      details: 'The Basic Plan includes access to our core features and email support for any issues you encounter.',
    },
    {
      name: 'Standard Plan',
      emoji: '🍑',
      price: '$20/month',
      features: ['Access to all features', 'Priority support'],
      details: 'The Standard Plan includes all features and priority support to ensure your needs are met quickly.',
    },
    {
      name: 'Premium Plan',
      emoji: '🍆',
      price: '$30/month',
      features: ['Access to all features', 'Dedicated account manager'],
      details: 'The Premium Plan includes all features, a dedicated account manager, and 24/7 support for your convenience.',
    },
  ];

  expandedPlanIndex: number | null = null;

  toggleDetails(index: number): void {
    this.expandedPlanIndex = this.expandedPlanIndex === index ? null : index;
  }
}