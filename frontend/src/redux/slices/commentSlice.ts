import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type CommentState = {
	statusEditable: boolean;
	commentEditableId: string | null;
};
const initialState: CommentState = {
	statusEditable: false,
	commentEditableId: null,
};

export const commentSlice = createSlice({
	name: 'comment',
	initialState,

	reducers: {
		addCommentEditableId: (state, action: PayloadAction<string>) => {
			state.commentEditableId = action.payload;
			state.statusEditable = true;
		},

		clearCommentEditableId: (state) => {
			state.commentEditableId = null;
			state.statusEditable = false;
		},
	},
});

export const { addCommentEditableId, clearCommentEditableId } = commentSlice.actions;
export default commentSlice.reducer;
