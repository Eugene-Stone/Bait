import { SectionsRequest } from '@backend-types/sectionsRequest';

type Props = {
	data: SectionsRequest;
};
export default function Request({ data }: Props) {
	return (
		<section id="request" className="sect-request bg-color-2">
			<div className="sect-inner">
				<div className="container">
					<div className="title-sect">
						<h2 className="h1-title">
							<span>Записаться на курс</span>
						</h2>
					</div>
					<div className="form-box color-light">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								<h2>Начни свой путь в IT</h2>
								<p>
									Заполни форму, и мы подберем подходящий курс под твой уровень
									подготовки и карьерные цели. Наш менеджер свяжется с тобой,
									расскажет о программе, форматах обучения, стоимости и поможет
									выбрать направление — Python, JavaScript, веб-разработка или
									другое.
								</p>

								<form className="form__request">
									<div className="row">
										<div className="col-md-6">
											<p>
												<label>Твое имя</label>

												<input
													placeholder="Введи имя"
													type="text"
													name="name"
												/>
											</p>
										</div>
										<div className="col-md-6">
											<p>
												<label>Телефон</label>

												<input
													placeholder="+7 (___) ___-__-__"
													type="text"
													name="phone"
												/>
											</p>
										</div>
										<div className="col-md-6">
											<p>
												<label>E-mail</label>

												<input
													placeholder="example@mail.com"
													type="email"
													name="email"
												/>
											</p>
										</div>
										<div className="col-md-6">
											<p>
												<label>Курс</label>

												<select
													name="course"
													aria-label="Выбери направление обучения">
													<option value="choose">
														Выбери направление
													</option>
													<option value="python-basic">
														Python с нуля
													</option>
													<option value="python-advanced">
														Python Advanced
													</option>
													<option value="js-basic">
														JavaScript с нуля
													</option>
													<option value="js-react">
														JavaScript + React
													</option>
													<option value="webdev">
														Веб-разработка Fullstack
													</option>
													<option value="other">Другое</option>
												</select>
											</p>
										</div>
										<div className="col-md-12">
											<p>
												<label>Уровень подготовки</label>

												<label>
													<input
														type="radio"
														defaultValue="zero"
														defaultChecked
														name="level"
													/>
													Полный ноль
												</label>
												<label>
													<input
														type="radio"
														defaultValue="basic"
														name="level"
													/>
													Есть базовые знания
												</label>
												<label>
													<input
														type="radio"
														defaultValue="middle"
														name="level"
													/>
													Уверенный пользователь
												</label>
											</p>
										</div>
										<div className="col-md-12">
											<p>
												<label>Формат обучения</label>

												<label>
													<input
														type="checkbox"
														defaultValue="offline"
														name="format"
													/>
													Очные занятия в школе
												</label>
												<label>
													<input
														type="checkbox"
														defaultValue="online"
														name="format"
													/>
													Онлайн-лекции
												</label>
												<label>
													<input
														type="checkbox"
														defaultValue="mentor"
														defaultChecked
														name="format"
													/>
													Менторская поддержка
												</label>
											</p>
										</div>
										<div className="col-md-12">
											<p>
												<label>Расскажи о своих целях</label>

												<textarea
													name="message"
													placeholder="Какой у тебя опыт в программировании? Почему хочешь учиться? На какую работу рассчитываешь после курса?"
													rows={6}
													defaultValue={''}
												/>
											</p>
										</div>
										<div className="col-md-12">
											<p>
												<label>
													<input type="checkbox" name="agree" />Я согласен
													на обработку персональных данных и получение
													рассылки о старте курсов.
												</label>
											</p>
										</div>
										<div className="col-md-12">
											<div className="btn-more-wrap">
												<button type="submit" className="btn disabled ">
													<span>Отправить заявку</span>
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
