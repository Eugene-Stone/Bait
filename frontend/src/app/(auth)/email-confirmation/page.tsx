import { redirect } from 'next/navigation';

interface Props {
	searchParams: Promise<{
		confirmation?: string;
	}>;
}

export default async function Page({ searchParams }: Props) {
	const { confirmation } = await searchParams;

	if (!confirmation) {
		redirect('/login');
	}

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/email-confirmation?confirmation=${confirmation}`,
	);

	if (!response.ok) {
		return (
			<section className="sect-txt">
				<div className="sect-inner">
					<div className="container">
						<div className="title-sect">
							<h2 className="h1-title">
								<span>Ошибка подтверждения</span>
							</h2>
						</div>
					</div>
				</div>
			</section>
		);
	}

	redirect('/login');
}
