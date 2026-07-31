import LoginForm from '@/components/LoginForm';
import { Suspense } from 'react';

export default function Login() {
	return (
		<section className="nw-auth-section">
			<div className="nw-auth-container">
				<h2 className="nw-auth-title">Вход</h2>

				{/* При вызове useSearchParams() в клиентском компоненте Next.js может потребовать обернуть этот компонент в <Suspense></Suspense> */}
				<Suspense fallback={null}>
					<LoginForm />
				</Suspense>
			</div>
		</section>
	);
}
