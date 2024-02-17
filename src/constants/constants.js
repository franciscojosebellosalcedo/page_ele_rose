import NextArrow from "../components/nextArrow/NextArrow.jsx";
import PrevArrow from "../components/prevArrow/PrevArrow.jsx";

export const ROUTES = {
	INIT: "/",
	ACCESORIES: "/accesories/all",
	ONE_CATEGORY: "/accesories/category",
	PRODUCT: "/accesories/product",
	CART: "/cart",
	ACCOUNT: "/account",

	ABOUT: "/about",
	CONTACT: "/contact",
	NOT_FOUND: "/not-found",
};

export const INFO_ELEROSE = {
	serviceClient: {
		title: "Atención al cliente",
		text: "Atendemos todas las inquietudes por Whatsapp +57 3053559355 y también por el email elerose@gmail.com",
	},
	deliveries: {
		title: "Envíos",
		text: "Envíos seguros a toda Colombia con nuestros aliados logísticos",
	},
	ratingsClients: {
		title: "Descubre lo que dicen nuestros clientes",
	},
	messageProductsNotFound: "No hay productos",
	infoEleRoseDetails: `
		Hacemos domicilios en Arjona y envíos a toda Colombia mediante transportadoras como Envía,
		Interrapidísimo o Servientrega. Costo del domicilio en Arjona: $4.000, fuera de Arjona: desde $8.000,
		se indicará el valor exacto al hacer la solicitud de pedido dependiendo de la ciudad de destino.
		El pago del producto más envío puede ser realizado por Nequi o Daviplata.
	`,
};

export const LIST_NUMBER_SCORE = [1, 2, 3, 4, 5];

export const URL_BASE = process.env.REACT_APP_URL_API;

export const SETTINGS_SLIDER_RESPONSIVE_RATINGS = {
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 4,
	autoplay: true,
	slidesToScroll: 4,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 740,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 710,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 690,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 670,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 630,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 610,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 590,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 560,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 540,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 530,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 510,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 460,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 450,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 430,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 410,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};
export const SETTINGS_SLIDER_RESPONSIVE = {
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 740,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 710,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 690,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 670,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 630,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 610,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 590,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 560,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 540,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 530,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 510,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 460,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 450,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 430,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 410,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};
export const SETTINGS_SLIDER_RESPONSIVE_CATEGORIES_ACCESORIES = {
	dots: true,
	speed: 500,
	slidesToShow: 4,
	autoplay: true,
	slidesToScroll: 4,
	initialSlide: 0,
	infinite: true,
	responsive: [
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
			},
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
	],
};

export const SETTINGS_SLIDER_MAIN = {
	dots: true,
	infinite: true,
	speed: 500,
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
};

export const HEADERS = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
	"Access-Control-Allow-Headers": "Content-Type",
	"Content-Type": "application/json",
};
