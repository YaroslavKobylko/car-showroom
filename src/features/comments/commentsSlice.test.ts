import { describe, it, expect, beforeEach } from 'vitest';
import commentsReducer, { addLocalReview } from './commentsSlice';

describe('commentsSlice', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('додає відгук у стан', () => {
    const initialState = { localReviews: {} };
    const review = {
      reviewerName: 'Yaroslav',
      reviewerEmail: 'test@test.com',
      comment: 'Top!',
      rating: 5,
      date: new Date().toISOString()
    };

    const action = addLocalReview({ vehicleId: 167, review });
    const state = commentsReducer(initialState, action);

    expect(state.localReviews[167]).toHaveLength(1);
    expect(state.localReviews[167][0].reviewerName).toBe('Yaroslav');
  });
});