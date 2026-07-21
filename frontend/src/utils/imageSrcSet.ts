import { Media, MediaFormat } from '@backend-types/media';

// Array element: standard MediaFormat fields + added type field
export type ImageFormatItem = MediaFormat & {
	type: keyof NonNullable<Media['formats']>;
};

export function imageSrcSet(image: Media): ImageFormatItem[] {
	if (!image?.formats) return [];

	return (Object.entries(image.formats) as [keyof NonNullable<Media['formats']>, MediaFormat][])
		.map(([key, value]) => ({
			type: key,
			...value,
		}))
		.sort((a, b) => b.width - a.width);
}
