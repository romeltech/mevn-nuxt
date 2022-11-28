export interface IPost {
    _id?: string;
	title: string;
	text: string;
}

export interface IUser {
	_id?: string;
	fullname: string;
	username: string;
	email: string;
	password: string;
}

export interface UserType {
	_id?: string;
	fullname: string;
	username: string;
	email: string;
	password: string;
}