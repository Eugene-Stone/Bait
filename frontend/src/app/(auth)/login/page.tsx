import { getMe } from '@/api/auth-server';
import LoginForm from '@/components/LoginForm';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export const dynamic = 'force-static';
export const revalidate = 300; // Пересборка каждые 5 минут

type Props = {
	params: Promise<{ slug: string }>;
};

export default async function Login({ params }: Props) {
	const user = await getMe();
	if (user) {
		redirect('/profile');
	}

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
