import { i as __toESM } from "../_runtime.mjs";
import { v as MathUtils } from "../_libs/@monogrid/gainmap-js+[...].mjs";
import { i as useFrame, n as Float, o as require_jsx_runtime, r as Canvas, s as require_react, t as Environment } from "../_libs/@react-three/drei+[...].mjs";
import { a as Mail, c as FileCog, d as CircuitBoard, f as Boxes, i as MapPin, l as Factory, n as Ruler, o as Linkedin, p as ArrowDown, r as Phone, s as Layers, t as Wrench, u as Cog } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CfU-Rcpv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Part({ progress, finalPos, explodeOffset, rotation = [
	0,
	0,
	0
], spin = 0, children }) {
	const ref = (0, import_react.useRef)(null);
	useFrame((_, dt) => {
		if (!ref.current) return;
		const p = MathUtils.clamp(progress.current, 0, 1);
		const e = p * p * (3 - 2 * p);
		ref.current.position.set(finalPos[0] + explodeOffset[0] * (1 - e), finalPos[1] + explodeOffset[1] * (1 - e), finalPos[2] + explodeOffset[2] * (1 - e));
		ref.current.rotation.set(rotation[0] + (1 - e) * .6, rotation[1] + (1 - e) * 1.2, rotation[2] + (1 - e) * .4);
		if (spin) ref.current.rotation.y += dt * spin * e;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref,
		children
	});
}
var steel = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
	color: "#c8ccd4",
	metalness: .9,
	roughness: .28
});
var dark = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
	color: "#3a4048",
	metalness: .85,
	roughness: .4
});
var amber = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
	color: "#f5a524",
	metalness: .6,
	roughness: .35,
	emissive: "#8a4a00",
	emissiveIntensity: .35
});
var bolt = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
	color: "#8a8f98",
	metalness: .95,
	roughness: .25
});
function Assembly({ progress }) {
	const group = (0, import_react.useRef)(null);
	useFrame((state) => {
		if (!group.current) return;
		const t = state.clock.getElapsedTime();
		group.current.rotation.y = Math.sin(t * .2) * .35 + progress.current * .4;
		group.current.rotation.x = Math.cos(t * .15) * .05;
	});
	const rungs = (0, import_react.useMemo)(() => Array.from({ length: 7 }, (_, i) => i), []);
	const bolts = (0, import_react.useMemo)(() => Array.from({ length: 8 }, (_, i) => i), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: group,
		position: [
			0,
			-.2,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
				progress,
				finalPos: [
					0,
					-2.4,
					0
				],
				explodeOffset: [
					0,
					-3.5,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						3.2,
						.15,
						2.2
					] }), dark]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.09,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.8,
						.04,
						1.8
					] }), amber]
				})]
			}),
			[
				[
					-1.3,
					0,
					-.9
				],
				[
					1.3,
					0,
					-.9
				],
				[
					-1.3,
					0,
					.9
				],
				[
					1.3,
					0,
					.9
				]
			].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				progress,
				finalPos: p,
				explodeOffset: [
					p[0] * 2.5,
					2 + i * .4,
					p[2] * 2.5
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.08,
						.08,
						4.6,
						12
					] }), steel]
				})
			}, `rail-${i}`)),
			rungs.map((i) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
					progress,
					finalPos: [
						0,
						-1.9 + i * .55,
						.9
					],
					explodeOffset: [
						(i % 2 === 0 ? -1 : 1) * (3 + i * .3),
						.5,
						3 + i * .2
					],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						rotation: [
							0,
							0,
							Math.PI / 2
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.05,
							.05,
							2.5,
							10
						] }), steel]
					})
				}, `rung-${i}`);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
				progress,
				finalPos: [
					0,
					1.7,
					-.6
				],
				explodeOffset: [
					-4,
					2.5,
					-3
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.4,
						.9,
						.9
					] }), dark]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.5,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.2,
						.05,
						.7
					] }), amber]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
				progress,
				finalPos: [
					-.55,
					1.7,
					0
				],
				explodeOffset: [
					-3.5,
					.5,
					2
				],
				spin: .8,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.55,
							.55,
							.14,
							24
						] }), steel]
					}),
					Array.from({ length: 16 }).map((_, i) => {
						const a = i / 16 * Math.PI * 2;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								Math.cos(a) * .6,
								0,
								Math.sin(a) * .6
							],
							rotation: [
								0,
								-a,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.12,
								.14,
								.1
							] }), steel]
						}, i);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.1,
						.1,
						.2,
						12
					] }), amber] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
				progress,
				finalPos: [
					.55,
					1.7,
					0
				],
				explodeOffset: [
					3.5,
					.5,
					2
				],
				spin: -1.4,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.32,
						.32,
						.14,
						20
					] }), steel]
				}), Array.from({ length: 12 }).map((_, i) => {
					const a = i / 12 * Math.PI * 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							Math.cos(a) * .37,
							0,
							Math.sin(a) * .37
						],
						rotation: [
							0,
							-a,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							.09,
							.14,
							.08
						] }), steel]
					}, i);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Part, {
				progress,
				finalPos: [
					0,
					1.7,
					.3
				],
				explodeOffset: [
					0,
					4,
					3
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.08,
						.08,
						1.8,
						16
					] }), steel]
				})
			}),
			[-.7, .7].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
				progress,
				finalPos: [
					x,
					1.7,
					.3
				],
				explodeOffset: [
					x * 4,
					-2,
					4
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
						.18,
						.06,
						12,
						24
					] }), dark]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
						.11,
						.03,
						10,
						20
					] }), amber]
				})]
			}, `brg-${i}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
				progress,
				finalPos: [
					0,
					2.5,
					0
				],
				explodeOffset: [
					0,
					5,
					0
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
							1.2,
							.06,
							10,
							32
						] }), steel]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							-.1,
							0
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
							1.2,
							.06,
							10,
							32
						] }), steel]
					}),
					Array.from({ length: 8 }).map((_, i) => {
						const a = i / 8 * Math.PI * 2;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								Math.cos(a) * 1.2,
								-.05,
								Math.sin(a) * 1.2
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.03,
								.03,
								.2,
								8
							] }), steel]
						}, i);
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
				progress,
				finalPos: [
					-1.1,
					1.7,
					-.6
				],
				explodeOffset: [
					-5,
					-1,
					-3
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					rotation: [
						0,
						0,
						Math.PI / 2
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.35,
						.35,
						.9,
						20
					] }), dark]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					rotation: [
						0,
						0,
						Math.PI / 2
					],
					position: [
						.5,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.36,
						.36,
						.1,
						20
					] }), amber]
				})]
			}),
			bolts.map((i) => {
				const a = i / 8 * Math.PI * 2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Part, {
					progress,
					finalPos: [
						Math.cos(a) * 1.35,
						-2.28,
						Math.sin(a) * .95
					],
					explodeOffset: [
						Math.cos(a) * 4,
						-3,
						Math.sin(a) * 4
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.06,
						.06,
						.12,
						6
					] }), bolt] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							-.12,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.035,
							.035,
							.15,
							8
						] }), bolt]
					})]
				}, `bolt-${i}`);
			})
		]
	});
}
function WindTurbine({ position, scale = 1, speed = 1 }) {
	const rotor = (0, import_react.useRef)(null);
	useFrame((_, dt) => {
		if (rotor.current) rotor.current.rotation.z += dt * speed;
	});
	const towerMat = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
		color: "#eef1f6",
		metalness: .35,
		roughness: .5,
		emissive: "#2a3550",
		emissiveIntensity: .15
	});
	const bladeMat = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
		color: "#ffffff",
		metalness: .2,
		roughness: .4,
		emissive: "#3a4a70",
		emissiveIntensity: .2
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		scale,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					4,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.22,
					.5,
					8,
					20
				] }), towerMat]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					8.2,
					.35
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.7,
					.7,
					1.6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e2e6ee",
					metalness: .4,
					roughness: .45
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					0,
					8.2,
					1.25
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.3,
						16,
						16
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c8ccd4",
						metalness: .7,
						roughness: .3
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
					ref: rotor,
					children: [
						0,
						1,
						2
					].map((i) => {
						const a = i / 3 * Math.PI * 2;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							rotation: [
								0,
								0,
								a
							],
							position: [
								Math.cos(a + Math.PI / 2) * 2.2,
								Math.sin(a + Math.PI / 2) * 2.2,
								0
							],
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.22,
								4.2,
								.08
							] }), bladeMat]
						}, i);
					})
				})]
			})
		]
	});
}
function FloatingGear({ position, size, speed, color = "#c8ccd4" }) {
	const ref = (0, import_react.useRef)(null);
	useFrame((_, dt) => {
		if (ref.current) ref.current.rotation.z += dt * speed;
	});
	const teeth = 14;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref,
		position,
		rotation: [
			Math.PI / 2,
			0,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				size,
				size,
				size * .25,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color,
				metalness: .8,
				roughness: .35
			})] }),
			Array.from({ length: teeth }).map((_, i) => {
				const a = i / teeth * Math.PI * 2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						Math.cos(a) * size * 1.08,
						0,
						Math.sin(a) * size * 1.08
					],
					rotation: [
						0,
						-a,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						size * .22,
						size * .25,
						size * .18
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color,
						metalness: .8,
						roughness: .35
					})]
				}, i);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				size * .22,
				size * .22,
				size * .4,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#f5a524",
				metalness: .6,
				roughness: .3,
				emissive: "#8a4a00",
				emissiveIntensity: .3
			})] })
		]
	});
}
function Piston({ position }) {
	const rod = (0, import_react.useRef)(null);
	useFrame((state) => {
		if (rod.current) rod.current.position.y = Math.sin(state.clock.elapsedTime * 1.8) * .35;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		rotation: [
			0,
			0,
			Math.PI / 6
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.35,
			.35,
			1.4,
			16
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#3a4048",
			metalness: .85,
			roughness: .4
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			ref: rod,
			position: [
				0,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.12,
				.12,
				1.8,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#e8ecf2",
				metalness: .95,
				roughness: .2
			})]
		})]
	});
}
function Scenery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindTurbine, {
			position: [
				-7,
				-2.5,
				-4
			],
			scale: .85,
			speed: .7
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindTurbine, {
			position: [
				8.5,
				-2.5,
				-6
			],
			scale: 1,
			speed: .5
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindTurbine, {
			position: [
				-11,
				-2.5,
				-9
			],
			scale: 1.2,
			speed: .4
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindTurbine, {
			position: [
				13,
				-2.5,
				-10
			],
			scale: .9,
			speed: .6
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingGear, {
			position: [
				-6,
				4.5,
				-3
			],
			size: .9,
			speed: .6
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingGear, {
			position: [
				-5.2,
				4.5,
				-3
			],
			size: .55,
			speed: -1,
			color: "#f5a524"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingGear, {
			position: [
				7,
				5.2,
				-4
			],
			size: .7,
			speed: .8
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Piston, { position: [
			8,
			3,
			-3
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Piston, { position: [
			-8,
			2,
			-4
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				6,
				-12
			],
			rotation: [
				0,
				0,
				.2
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				6,
				.15,
				.4
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c8ccd4",
				metalness: .7,
				roughness: .4
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				6,
				-12
			],
			rotation: [
				0,
				0,
				.2
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.4,
				1.2,
				.15
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c8ccd4",
				metalness: .7,
				roughness: .4
			})]
		})
	] });
}
function AssemblyScene({ progress }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		shadows: true,
		dpr: [1, 1.8],
		camera: {
			position: [
				5.5,
				1.5,
				6.5
			],
			fov: 46
		},
		gl: {
			antialias: true,
			alpha: true
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
				attach: "background",
				args: ["#152238"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
				attach: "fog",
				args: [
					"#152238",
					22,
					55
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
				"#7ba3d8",
				"#0a1220",
				.6
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .4 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					6,
					8,
					5
				],
				intensity: 1.5,
				castShadow: true,
				"shadow-mapSize": [1024, 1024]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					-6,
					4,
					-3
				],
				intensity: .7,
				color: "#6a95c8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					2,
					3
				],
				intensity: .9,
				color: "#f5a524"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
				fallback: null,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scenery, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
						speed: .6,
						rotationIntensity: .15,
						floatIntensity: .35,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Assembly, { progress })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, { preset: "warehouse" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					0,
					-2.5,
					-6
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [120, 120] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#0f1c30",
					metalness: .1,
					roughness: .9
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					0,
					-2.49,
					0
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [30, 30] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("shadowMaterial", { opacity: .5 })]
			})
		]
	});
}
var experience = [{
	company: "Hailo Wind Systems India Pvt. Ltd.",
	role: "Design Engineer",
	period: "Jan 2023 – Present",
	location: "Pune, Maharashtra",
	points: [
		"Own end-to-end NPD from customer requirements through concept, detailed design, reviews and final release.",
		"Design complex sheet metal parts, weldments and large assemblies in Creo Parametric with DFMA and cost optimization.",
		"Author manufacturing-ready 3D models, GD&T (ASME Y14.5) drawings, BOMs and ECNs; manage data in Windchill PLM and SAP.",
		"Support prototype build, design validation, RCA and manufacturing issue resolution across the product lifecycle."
	]
}];
var projects = [
	{
		client: "GE Vernova",
		period: "Aug 2023 – Dec 2023",
		tag: "Industrial Design Release",
		detail: "Led mechanical design from requirement analysis through validation and engineering release for customized industrial products, ensuring DFM, GD&T and customer compliance.",
		icon: FileCog
	},
	{
		client: "Suzlon Energy Ltd.",
		period: "Sep 2023 – Present",
		tag: "New Product Development",
		detail: "Developed a Single Human Climber for lattice tower access — full documentation, design reviews and customer coordination through the project lifecycle.",
		icon: Layers
	},
	{
		client: "Siemens Gamesa Renewable Energy",
		period: "Jan 2024 – Present",
		tag: "Structural Optimization",
		detail: "Optimized sheet metal and structural assemblies for access and safety systems — improving structural integrity, manufacturability and installation efficiency.",
		icon: CircuitBoard
	},
	{
		client: "Adani Green Energy Ltd.",
		period: "Oct 2023 – Present",
		tag: "3.3 MW Turbine Program",
		detail: "Delivered service lift ladder assemblies for 3.3 MW wind turbine towers — 3D modeling, manufacturing drawings, BOM and design validation.",
		icon: Boxes
	}
];
var skillGroups = [
	{
		title: "CAD",
		icon: Ruler,
		items: [
			"Creo Parametric",
			"SolidWorks",
			"AutoCAD"
		]
	},
	{
		title: "Design",
		icon: Cog,
		items: [
			"Product Design & Development",
			"Sheet Metal",
			"Large Assemblies",
			"Weldments",
			"FEA",
			"GD&T",
			"DFM"
		]
	},
	{
		title: "PLM / ERP",
		icon: Factory,
		items: ["Windchill", "SAP"]
	},
	{
		title: "Engineering",
		icon: Wrench,
		items: [
			"BOM Preparation",
			"ECN Management",
			"Design Reviews",
			"Cross-functional Collaboration"
		]
	}
];
function Portfolio() {
	const heroRef = (0, import_react.useRef)(null);
	const progressRef = (0, import_react.useRef)(0);
	const [progressState, setProgressState] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const el = heroRef.current;
			if (!el) return;
			const rect = el.getBoundingClientRect();
			const total = el.offsetHeight - window.innerHeight;
			const scrolled = Math.min(Math.max(-rect.top, 0), total);
			const p = total > 0 ? scrolled / total : 0;
			progressRef.current = p;
			setProgressState(p);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const pct = Math.round(progressState * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed top-0 z-50 w-full bp-panel",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2 font-mono text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tracking-widest",
								children: "AMITABH.SINGH"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden gap-8 md:flex",
							children: [
								"about",
								"experience",
								"projects",
								"skills",
								"contact"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${s}`,
								className: "tick-label transition-colors hover:text-primary",
								children: s
							}, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "hidden rounded-md border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-block",
							children: "Hire"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: heroRef,
				id: "top",
				className: "relative",
				style: { height: "260vh" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sticky top-0 h-screen w-full overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssemblyScene, { progress: progressRef })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pointer-events-none relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pt-24 pb-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-auto max-w-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-primary" }), "Mechanical Design Engineer"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "font-display text-6xl font-bold leading-[0.9] md:text-8xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-glow",
												children: "Amitabh"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-glow",
												children: "Singh"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-5 max-w-xl text-lg text-foreground/80 md:text-xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "From"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: "exploded view"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "to"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: "production-ready"
											}),
											"."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-xl font-mono text-xs text-muted-foreground md:text-sm",
										children: "Product development · sheet-metal · gearboxes · structural assemblies · access systems — for GE Vernova, Siemens Gamesa, Suzlon and Adani Green."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-auto flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2 font-mono text-xs uppercase tracking-widest",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "tick-label",
												children: "ASSY-001"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-border" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Service Lift · Ladder Cage" })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "tick-label",
												children: "Assembly"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative h-1.5 w-56 overflow-hidden rounded-full bg-border",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute inset-y-0 left-0 bg-primary shadow-[0_0_16px_var(--primary)]",
													style: { width: `${pct}%` }
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "tabular-nums text-primary",
												children: [pct.toString().padStart(3, "0"), "%"]
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-muted-foreground animate-bounce",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tick-label",
										children: "Scroll to assemble"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-4 w-4" })]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-6 border border-border/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute left-6 top-6 tick-label",
							children: "N 18°32'"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute right-6 top-6 tick-label",
							children: "Rev 1.2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute bottom-6 right-6 tick-label",
							children: "Scale 1:12"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "relative border-t border-border/60 py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						index: "01",
						title: "Profile",
						subtitle: "Design philosophy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-12 md:grid-cols-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-2xl leading-relaxed text-foreground/90 md:text-3xl",
								children: [
									"I take mechanical systems from",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary text-glow",
										children: "requirement"
									}),
									" to",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary text-glow",
										children: "release"
									}),
									" — turning customer intent into manufacturable, cost-optimised assemblies that survive the field."
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-2xl text-muted-foreground",
								children: "Three-plus years of new product development in wind energy — lattice-tower climbers, service lifts, gearboxes, structural brackets. Fluent in Creo, Windchill PLM and the language of manufacturing."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-4 md:col-span-2",
							children: [
								{
									k: "3+",
									v: "Years designing"
								},
								{
									k: "4",
									v: "Global OEMs"
								},
								{
									k: "3.3 MW",
									v: "Turbine programs"
								},
								{
									k: "ISO",
									v: "Standards compliant"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bp-panel rounded-lg p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-3xl text-primary text-glow",
									children: s.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 tick-label",
									children: s.v
								})]
							}, s.v))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "experience",
				className: "relative border-t border-border/60 py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						index: "02",
						title: "Experience",
						subtitle: "Where the bolts got tightened"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 space-y-8",
						children: [experience.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bp-panel group relative overflow-hidden rounded-xl p-8 transition-all hover:border-primary/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/40 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl",
										children: e.company
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-mono text-sm text-primary",
										children: e.role
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "tick-label",
										children: [
											e.period,
											" · ",
											e.location
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-3",
									children: e.points.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-4 shrink-0 bg-primary/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
									}, i))
								})
							]
						}, e.company)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bp-panel rounded-xl p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "tick-label",
									children: "Education"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap items-baseline justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: "B.E. Mechanical Engineering"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-sm text-muted-foreground",
										children: "Aug 2018 – May 2022"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-muted-foreground",
									children: "Abdul Kalam Technical University, Lucknow"
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "projects",
				className: "relative border-t border-border/60 py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						index: "03",
						title: "Programs",
						subtitle: "Assemblies that ship"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2",
						children: projects.map((p, i) => {
							const Icon = p.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bp-panel group relative overflow-hidden rounded-xl p-8 transition-all hover:-translate-y-1 hover:border-primary/50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:bg-primary/20" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-lg border border-border bg-secondary/40 p-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-primary" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "tick-label",
											children: ["P-", String(i + 1).padStart(3, "0")]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 tick-label text-primary",
										children: p.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-2xl",
										children: p.client
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-mono text-xs text-muted-foreground",
										children: p.period
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-muted-foreground",
										children: p.detail
									})
								]
							}, p.client);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "skills",
				className: "relative border-t border-border/60 py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						index: "04",
						title: "Toolchain",
						subtitle: "Bill of capabilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
						children: skillGroups.map((g) => {
							const Icon = g.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bp-panel rounded-xl p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-sm uppercase tracking-widest",
										children: g.title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-2",
									children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-primary" }), it]
									}, it))
								})]
							}, g.title);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "relative border-t border-border/60 py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							index: "05",
							title: "Contact",
							subtitle: "Let's build something",
							center: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-8 font-display text-4xl md:text-6xl",
							children: [
								"Have a system that needs to be",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary text-glow",
									children: "engineered right?"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:amitabhsingh0012@gmail.com",
								className: "group flex items-center gap-3 rounded-md border border-primary/40 bg-primary px-6 py-3 font-mono text-sm text-primary-foreground transition-transform hover:scale-105",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), "amitabhsingh0012@gmail.com"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+919532313004",
								className: "flex items-center gap-3 rounded-md border border-border px-6 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "+91 95323 13004"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-center gap-6 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 tick-label",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), " Pune, India"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.linkedin.com/in/amitabh-singh-4b350920b",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-2 tick-label transition-colors hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-3 w-3" }), " LinkedIn"]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/60 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 tick-label",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Amitabh Singh" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rev 1.2 · Released" })]
				})
			})
		]
	});
}
function SectionHeader({ index, title, subtitle, center }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: center ? "flex flex-col items-center gap-3" : "flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex items-center gap-3 ${center ? "justify-center" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-sm text-primary",
					children: index
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-primary/60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tick-label",
					children: subtitle
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-4xl md:text-5xl",
			children: title
		})]
	});
}
//#endregion
export { Portfolio as component };
