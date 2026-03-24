import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Review } from '../../types/vehicle';

interface CommentsState {
  localReviews: Record<number, Review[]>;
}

const getInitialState = (): CommentsState => {
  const saved = localStorage.getItem('showroom_comments');
  return {
    localReviews: saved ? JSON.parse(saved) : {},
  };
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: getInitialState(),
  reducers: {
    addLocalReview: (
      state,
      action: PayloadAction<{ vehicleId: number; review: Review }>
    ) => {
      const { vehicleId, review } = action.payload;
      
      if (!state.localReviews[vehicleId]) {
        state.localReviews[vehicleId] = [];
      }
      
      state.localReviews[vehicleId].push(review);
      localStorage.setItem('showroom_comments', JSON.stringify(state.localReviews));
    },
  },
});

export const { addLocalReview } = commentsSlice.actions;
export default commentsSlice.reducer;