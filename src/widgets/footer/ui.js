import "./styles.scss";

export function Footer() {
    return `
        <footer class="footer">
            <div class="footer-items">
                <div class="footer-aboutSection">
                    <img class="footer-logo"src="/brandstore-white-logo.svg">
                    <div class="footer-phoneNumber">
                        <span class="footer-numberLight">+998</span>
                        <span class="footer-numberBold">71 205 93 93</span>
                    </div>
                    <div class="footer-workTime">
                        <span>График работы колл-центра:</span>
                        <p> <!-- -->Eжедневно<!-- -->, <!-- -->c<!-- --> 09:30 <!-- -->до<!-- --> 18:30 </p>
                    </div>
                    <div class="footer-email">
                        <p class="footer-emailText">info@brandstore.uz</p>
                    </div>
                    <div class="footer-socialMedia">
                        <a href="https://t.me/brandstore24_bot"><img src="/telegram.svg"></a>
                        <a href="https://www.instagram.com/brandstore.uz"><img src="/instagram.svg"></a>
                        <a href="https://www.youtube.com/channel/UCkfMxW123oZIoyhGpWPbokA"><img src="/youtube.svg"></a>
                        <a href="https://www.facebook.com/brandstoreuzofficial"><img src="/facebook.svg"></a>
                    </div>
                </div>
                <div class="footer-category">
                    <h3>Категории</h3>
                    <p>Моноблоки</p>
                    <p>Компьютеры</p>
                    <p>Видеокарты</p>
                    <p>Мониторы</p>
                    <p>МФУ</p>
                    <p>Телефоны</p>
                </div>
                <div class="footer-category">
                    <h3>Интернет магазин</h3>
                    <p>Политика и конфиденциальности</p>
                    <p>О нашей компании</p>
                    <p>Правила программы лояльности</p>
                    <p>Публичная офферта</p>
                    <p>Контакты</p>
                    <p>НАШИ МАГАЗИНЫ</p>
                </div>
                <div class="footer-category">
                    <h3>Покупателям</h3>
                    <p>Покупка в рассрочку</p>
                    <p>Допставка и оплата</p>
                    <p>Правилы покупок с кэшбэка</p>
                    <p>Возврат и Обмен</p>
                    <p>Правилы пользования купонами</p>
                </div>
                <div class="footer-paymentMethods">
                    <span class="footer-paymentTitle">Способ оплаты</span>
                    <div class="footer-paymentContainer">
                        <div class="footer-paymentLogo"><img src="/humo.webp"></div>
                        <div class="footer-paymentLogo"><img src="/humo.webp"></div>
                        <div class="footer-paymentLogo"><img src="/humo.webp"></div>
                        <div class="footer-paymentLogo"><img src="/humo.webp"></div>
                        <div class="footer-paymentLogo"><img src="/humo.webp"></div>
                        <div class="footer-paymentLogo"><img src="/humo.webp"></div>
                    </div>
                </div>
            </div>
            <div class="footer-license">
                <p>© 2020-<!-- -->2025<!-- --> OOO "BRANDSTORE". <!-- -->Все права защищены.</p>
            </div>
        </footer>
    `
};
