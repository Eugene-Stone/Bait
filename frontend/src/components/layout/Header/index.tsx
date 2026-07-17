// import useToggleMenu from '@/hooks/useToggleMenu';
import Link from 'next/link';
import ToggleMenu from './ToggleMenu';

export default function Header() {
	return (
		<header className="head-general">
			<div className="head-top">
				<div className="container-fluid">
					<div className="head-line">
						<div className="head-cell">
							<div className="logo-wrap">
								<Link
									className="logo active"
									href="/"
									data-discover="true"
									aria-current="page">
									{/* <Image
										alt="БАЙТ — школа программирования"
										width={71}
										height={42}
										src="./logo.png"
									/> */}
								</Link>
							</div>
						</div>
						<ToggleMenu className="head-cell">
							<nav className="mnu-wrap">
								<div className="menu-header-menu-container">
									<ul className="main-mnu">
										<li>
											<a className="menu__link" href="#about">
												О школе
											</a>
										</li>
										<li>
											<a className="menu__link" href="#opening-hours">
												Расписание
											</a>
										</li>
										<li>
											<a className="menu__link" href="#gallery">
												Проекты студентов
											</a>
										</li>
										<li>
											<a className="menu__link" href="#request">
												Записаться на курс
											</a>
										</li>
										<li>
											<Link href="/courses" data-discover="true">
												Курсы
											</Link>
										</li>
									</ul>
								</div>
							</nav>

							<div className="login-link">
								<Link
									aria-label="Личный кабинет студента"
									href="/profile"
									data-discover="true">
									<svg
										fill="none"
										height={30}
										viewBox="0 0 24 24"
										width={30}
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="m14.9999 15.2547c-1.1338-.7909-2.5127-1.2547-4-1.2547-3.59591 0-6.55854 2.7114-6.95492 6.2013-.02805.247-.04208.3705.00723.4898.04035.0975.12769.1953.22009.2464.11292.0625.25116.0625.52762.0625h5.14473m4.05525-1.7143 1.8 1.7143 4.2-4m-5-10c0 2.20914-1.7908 4-4 4-2.20912 0-3.99998-1.79086-3.99998-4s1.79086-4 3.99998-4c2.2092 0 4 1.79086 4 4z"
											stroke="#000"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}></path>
									</svg>
								</Link>
							</div>
						</ToggleMenu>
					</div>
				</div>
			</div>
		</header>
	);
}
