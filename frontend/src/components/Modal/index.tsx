'use client';

import * as Dialog from '@radix-ui/react-dialog';

import styles from './Modal.module.scss';
import { useEffect, useLayoutEffect, useState } from 'react';

type ModalProps = {
	title: string;
	trigger: React.ReactNode;
	children: React.ReactNode;
	open: boolean;
	onOpenChange?: (open: boolean) => void;
};

export default function Modal({ title, trigger, open, onOpenChange, children }: ModalProps) {
	return (
		<Dialog.Root open={open} onOpenChange={onOpenChange}>
			<Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className={styles.overlay} />

				<Dialog.Content className={styles.content}>
					<Dialog.Title className={styles.title}>{title}</Dialog.Title>

					<div className={styles.body}>{children}</div>

					<Dialog.Close className={styles.close}>✕</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
