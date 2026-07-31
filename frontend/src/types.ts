import { Course } from '@backend-types/course';

export type NavigationItemType = 'INTERNAL' | 'EXTERNAL' | 'WRAPPER';

export interface NavigationRelated {
	id: number;
	contentType: string;
	collectionName: string;
	// eslint-disable-next-line
	[key: string]: any; // Allows custom fields from your tied content types
}

export interface BaseNavigationItem {
	id: number;
	title: string;
	type: NavigationItemType;
	path: string;
	slug: string;
	externalPath: string | null;
	menuAttached: boolean;
	order: number;
	collapsed: boolean;
	audience: string[] | null;
	related: NavigationRelated | null;
	additionalFields?: {
		isAnchor?: boolean;
	};
}

// Type used when fetching a FLAT structural response
export interface FlatNavigationItem extends BaseNavigationItem {
	parent: number | null;
}

// Type used when fetching a TREE structural response
export interface TreeNavigationItem extends BaseNavigationItem {
	parent: null | TreeNavigationItem;
	items: TreeNavigationItem[];
}

// Wrapper for typical Strapi API JSON array responses
export type StrapiNavigationResponse<T extends 'FLAT' | 'TREE'> = T extends 'TREE'
	? TreeNavigationItem[]
	: FlatNavigationItem[];

export type Pagination = {
	page: number;
	pageCount: number;
	pageSize: number;
	total: number;
};

export type Meta = {
	pagination: Pagination;
};

export interface LoginRequest {
	identifier: string;
	password: string;
}

export interface RegisterRequest {
	username: string;
	email: string;
	password: string;
}
export interface ForgotPasswordRequest {
	email: string;
}
export interface ResetPasswordForm {
	password: string;
	passwordConfirmation: string;
}
export interface ResetPasswordRequest extends ResetPasswordForm {
	code: string;
}

export type CommentDataRequest = {
	title: string;
	text: string;
	user: number;
	course: number;
};

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface CourseExtended extends Course {
	documentId?: string;
}
