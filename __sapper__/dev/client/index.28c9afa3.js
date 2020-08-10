import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.e0e403c4.js';

/* src/routes/index.svelte generated by Svelte v3.24.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div;
	let p0;
	let t1;
	let t2;
	let p1;
	let t3;
	let t4;
	let h2;
	let t5;
	let t6;
	let p2;
	let a0;
	let t7;
	let t8;
	let p3;
	let a1;
	let t9;
	let t10;
	let p4;
	let a2;
	let t11;

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			p0 = element("p");
			t1 = text("For the past 18 years, Nick has found nothing more fun than turning creative ideas into software. Before even owning a computer in middle school, Nick would copy down, by hand, video games written in BASIC into his daily journal because the code looked cool. In high school, he started teaching himself programming, becoming an obsessed \"programming book enthusiast\"");
			t2 = space();
			p1 = element("p");
			t3 = text("Nick has worked as technical lead on various projects for global brands such as Adidas, Reebok and Louis Vuitton. Since serving as Director of Mobile for a now Trip Advisor acquired company, he has co-found various startups. Since 2016, he has held various positions as CTO, including the Techstars accelerator.");
			t4 = space();
			h2 = element("h2");
			t5 = text("Links");
			t6 = space();
			p2 = element("p");
			a0 = element("a");
			t7 = text("fluttercrashcourse.com");
			t8 = space();
			p3 = element("p");
			a1 = element("a");
			t9 = text("YouTube");
			t10 = space();
			p4 = element("p");
			a2 = element("a");
			t11 = text("Twitter");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ifmd5q\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			p0 = claim_element(div_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t1 = claim_text(p0_nodes, "For the past 18 years, Nick has found nothing more fun than turning creative ideas into software. Before even owning a computer in middle school, Nick would copy down, by hand, video games written in BASIC into his daily journal because the code looked cool. In high school, he started teaching himself programming, becoming an obsessed \"programming book enthusiast\"");
			p0_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			p1 = claim_element(div_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t3 = claim_text(p1_nodes, "Nick has worked as technical lead on various projects for global brands such as Adidas, Reebok and Louis Vuitton. Since serving as Director of Mobile for a now Trip Advisor acquired company, he has co-found various startups. Since 2016, he has held various positions as CTO, including the Techstars accelerator.");
			p1_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			h2 = claim_element(div_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t5 = claim_text(h2_nodes, "Links");
			h2_nodes.forEach(detach_dev);
			t6 = claim_space(div_nodes);
			p2 = claim_element(div_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			a0 = claim_element(p2_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t7 = claim_text(a0_nodes, "fluttercrashcourse.com");
			a0_nodes.forEach(detach_dev);
			p2_nodes.forEach(detach_dev);
			t8 = claim_space(div_nodes);
			p3 = claim_element(div_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			a1 = claim_element(p3_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t9 = claim_text(a1_nodes, "YouTube");
			a1_nodes.forEach(detach_dev);
			p3_nodes.forEach(detach_dev);
			t10 = claim_space(div_nodes);
			p4 = claim_element(div_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			a2 = claim_element(p4_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			t11 = claim_text(a2_nodes, "Twitter");
			a2_nodes.forEach(detach_dev);
			p4_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "nickmaning.dev";
			attr_dev(p0, "class", "svelte-hryuqe");
			add_location(p0, file, 41, 1, 658);
			attr_dev(p1, "class", "svelte-hryuqe");
			add_location(p1, file, 42, 1, 1033);
			attr_dev(h2, "class", "svelte-hryuqe");
			add_location(h2, file, 43, 1, 1353);
			attr_dev(a0, "href", "https://fluttercrashcourse.com");
			attr_dev(a0, "class", "svelte-hryuqe");
			add_location(a0, file, 44, 4, 1372);
			attr_dev(p2, "class", "svelte-hryuqe");
			add_location(p2, file, 44, 1, 1369);
			attr_dev(a1, "href", "https://www.youtube.com/fluttercrashcourse");
			attr_dev(a1, "class", "svelte-hryuqe");
			add_location(a1, file, 45, 4, 1448);
			attr_dev(p3, "class", "svelte-hryuqe");
			add_location(p3, file, 45, 1, 1445);
			attr_dev(a2, "href", "https://www.twitter.com/seenickcode");
			attr_dev(a2, "class", "svelte-hryuqe");
			add_location(a2, file, 46, 4, 1521);
			attr_dev(p4, "class", "svelte-hryuqe");
			add_location(p4, file, 46, 1, 1518);
			attr_dev(div, "class", "hero-section");
			add_location(div, file, 39, 0, 595);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, p0);
			append_dev(p0, t1);
			append_dev(div, t2);
			append_dev(div, p1);
			append_dev(p1, t3);
			append_dev(div, t4);
			append_dev(div, h2);
			append_dev(h2, t5);
			append_dev(div, t6);
			append_dev(div, p2);
			append_dev(p2, a0);
			append_dev(a0, t7);
			append_dev(div, t8);
			append_dev(div, p3);
			append_dev(p3, a1);
			append_dev(a1, t9);
			append_dev(div, t10);
			append_dev(div, p4);
			append_dev(p4, a2);
			append_dev(a2, t11);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjhjOWFmYTMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
