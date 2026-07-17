import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className="foot-general">
			<div className="container-fluid">
				<div className="foot-line">
					<div className="foot-cell">
						<div className="logo-wrap">
							<Link href="/" className="logo">
								{/* <Image
									alt="БАЙТ — школа программирования"
									width={61}
									height={36}
									src="./logo.png"
								/> */}
							</Link>
						</div>
					</div>
					<div className="foot-cell">
						<div className="f-itm">
							Школа программирования БАЙТ — практические курсы по Python, JavaScript и
							веб-разработке с нуля до первой работы в IT. Менторы из индустрии,
							реальные проекты, помощь с трудоустройством.
						</div>
						<div className="flex-line">
							<div className="copyright">
								2026 © БАЙТ. Школа программирования. Все права защищены.
							</div>
							<nav className="foot-nav">
								<ul>
									<li>
										<a href="#">Политика конфиденциальности</a>
									</li>
									<li>
										<a href="#">Пользовательское соглашение</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="f-itm">
							<p>
								Освой востребованную IT-профессию вместе с нами.
								<a href="/link">БАЙТ</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
