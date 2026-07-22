import RichText from '@/utils/RichText';
import { SectionsService } from '@backend-types/sectionsService';

type Props = {
	data: SectionsService;
};
export default function Service({ data }: Props) {
	const { title, text } = data;
	return (
		<section id="service" className="sect-txt bg-color-2">
			<div className="sect-inner">
				<div className="container">
					<div className="title-sect">
						<h2 className="h1-title">
							<span>{title}</span>
						</h2>
					</div>
					<div className="txt-box color-light">
						<div className="row justify-content-center">
							<RichText className="col-lg-12">{text}</RichText>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
