import { NavLink } from "react-router-dom"
import Img from "./assets/Vector.svg"
import { useState } from "react"

export default function Nav() {
    let [burger, useBurger] = useState(false)
    function reverse() {
        if (burger == false) {
            useBurger(
                burger = <>
                    <div className="burger__active">
                        <NavLink className="item__active"><span>Каталог</span></NavLink>
                        <NavLink className="item__active"><span>О нас</span></NavLink>
                        <NavLink className="item__active"><span>Подбор товара</span></NavLink>
                        <NavLink className="item__active"><span>Наша команда</span></NavLink>
                        <NavLink className="item__active"><span>Доставка и оплата</span></NavLink>
                        <NavLink className="item__active"><span>Контакты</span></NavLink>
                    </div>
                </>)
        } else {
            useBurger(burger = false)
        }
    }
    return (
        <nav className="nav">
            {burger}
            <div className="content">
                <div className="logo">SneakMax</div>
                {/* <div className="line-cut"></div> */}
                <div className="item-container">
                    <div className="item__item">
                        <div onClick={reverse} className="item__burger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <NavLink className="item"><span>Каталог</span></NavLink>
                        <NavLink className="item"><span>О нас</span></NavLink>
                        <NavLink className="item"><span>Подбор товара</span></NavLink>
                        <NavLink className="item"><span>Наша команда</span></NavLink>
                        <NavLink className="item"><span>Доставка и оплата</span></NavLink>
                        <NavLink className="item"><span>Контакты</span></NavLink>
                    </div>
                    <div className="item__cart">
                        <span>Корзина</span>
                        <div className="cart__img">
                            <img src={Img} alt="" className="img" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}