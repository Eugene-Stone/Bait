'use client';

import { deleteReview } from '@/api/auth-client';
import { useRouter } from 'next/navigation';

type Props = {
	id: string;
};
export default function ReviewDeleteButton({ id }: Props) {
	const router = useRouter();

	async function removeReview(value: string) {
		try {
			const response = await deleteReview(value);

			setTimeout(() => {
				router.refresh(); // Запрашивает обновленные Server Components у сервера
			}, 500);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			}
		}
	}

	function handleDelete() {
		if (confirm('Вы уверены?')) {
			removeReview(id);
			// console.log('удалено', id);
		}
	}

	return (
		<button className="delete" type="button" onClick={handleDelete}>
			X
		</button>
	);
}
