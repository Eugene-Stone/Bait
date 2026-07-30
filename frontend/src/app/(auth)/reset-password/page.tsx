import ResetPasswordForm from '@/components/ResetPasswordForm';
import { Suspense } from 'react';

export default function ResetPassword() {
	return (
		<section className="nw-auth-section">
			<div className="nw-auth-container">
				<h2 className="nw-auth-title">Новый пароль</h2>
				<Suspense fallback={<div>Loading...</div>}>
					<ResetPasswordForm />
				</Suspense>
			</div>
		</section>
	);
}
