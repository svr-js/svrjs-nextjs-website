import { useRouter } from "next/router";

export default {
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="og:title" content="SVRJS" />
			<meta
				property="og:description"
				content="the open source node running server"
			/>
		</>
	),
	editLink: {
		component: null,
	},
	feedback: {
		content: null,
	},
	logo: (
		<svg
                xmlns="http://www.w3.org/2000/svg"
                width={120}
                height={40}
                viewBox="0 0 194 48"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M53.22 40.315c-2.31 0-4.38-.375-6.21-1.125s-3.3-1.86-4.41-3.33c-1.08-1.47-1.65-3.24-1.71-5.31h8.19c.12 1.17.525 2.07 1.215 2.7.69.6 1.59.9 2.7.9 1.14 0 2.04-.255 2.7-.765.66-.54.99-1.275.99-2.205 0-.78-.27-1.425-.81-1.935-.51-.51-1.155-.93-1.935-1.26-.75-.33-1.83-.705-3.24-1.125-2.04-.63-3.705-1.26-4.995-1.89-1.29-.63-2.4-1.56-3.33-2.79-.93-1.23-1.395-2.835-1.395-4.815 0-2.94 1.065-5.235 3.195-6.885 2.13-1.68 4.905-2.52 8.325-2.52 3.48 0 6.285.84 8.415 2.52 2.13 1.65 3.27 3.96 3.42 6.93H56.01c-.06-1.02-.435-1.815-1.125-2.385-.69-.6-1.575-.9-2.655-.9-.93 0-1.68.255-2.25.765-.57.48-.855 1.185-.855 2.115 0 1.02.48 1.815 1.44 2.385.96.57 2.46 1.185 4.5 1.845 2.04.69 3.69 1.35 4.95 1.98 1.29.63 2.4 1.545 3.33 2.745.93 1.2 1.395 2.745 1.395 4.635 0 1.8-.465 3.435-1.395 4.905-.9 1.47-2.22 2.64-3.96 3.51-1.74.87-3.795 1.305-6.165 1.305ZM98.68 8.41 87.475 40h-9.63L66.642 8.41h8.19l7.83 23.85 7.874-23.85h8.145ZM117.557 40l-6.57-11.925h-1.845V40h-7.695V8.41h12.915c2.49 0 4.605.435 6.345 1.305 1.77.87 3.09 2.07 3.96 3.6.87 1.5 1.305 3.18 1.305 5.04 0 2.1-.6 3.975-1.8 5.625-1.17 1.65-2.91 2.82-5.22 3.51l7.29 12.51h-8.685Zm-8.415-17.37h4.77c1.41 0 2.46-.345 3.15-1.035.72-.69 1.08-1.665 1.08-2.925 0-1.2-.36-2.145-1.08-2.835-.69-.69-1.74-1.035-3.15-1.035h-4.77v7.83Zm24.81 17.73c-1.35 0-2.46-.39-3.33-1.17-.84-.81-1.26-1.8-1.26-2.97 0-1.2.42-2.205 1.26-3.015.87-.81 1.98-1.215 3.33-1.215 1.32 0 2.4.405 3.24 1.215.87.81 1.305 1.815 1.305 3.015 0 1.17-.435 2.16-1.305 2.97-.84.78-1.92 1.17-3.24 1.17Zm28.45-31.95v21.51c0 3.33-.945 5.895-2.835 7.695-1.86 1.8-4.38 2.7-7.56 2.7-3.33 0-6-.945-8.01-2.835-2.01-1.89-3.015-4.575-3.015-8.055h7.65c0 1.32.27 2.325.81 3.015.54.66 1.32.99 2.34.99.93 0 1.65-.3 2.16-.9.51-.6.765-1.47.765-2.61V8.41h7.695Zm17.196 31.905c-2.31 0-4.38-.375-6.21-1.125s-3.3-1.86-4.41-3.33c-1.08-1.47-1.65-3.24-1.71-5.31h8.19c.12 1.17.525 2.07 1.215 2.7.69.6 1.59.9 2.7.9 1.14 0 2.04-.255 2.7-.765.66-.54.99-1.275.99-2.205 0-.78-.27-1.425-.81-1.935-.51-.51-1.155-.93-1.935-1.26-.75-.33-1.83-.705-3.24-1.125-2.04-.63-3.705-1.26-4.995-1.89-1.29-.63-2.4-1.56-3.33-2.79-.93-1.23-1.395-2.835-1.395-4.815 0-2.94 1.065-5.235 3.195-6.885 2.13-1.68 4.905-2.52 8.325-2.52 3.48 0 6.285.84 8.415 2.52 2.13 1.65 3.27 3.96 3.42 6.93h-8.325c-.06-1.02-.435-1.815-1.125-2.385-.69-.6-1.575-.9-2.655-.9-.93 0-1.68.255-2.25.765-.57.48-.855 1.185-.855 2.115 0 1.02.48 1.815 1.44 2.385.96.57 2.46 1.185 4.5 1.845 2.04.69 3.69 1.35 4.95 1.98 1.29.63 2.4 1.545 3.33 2.745.93 1.2 1.395 2.745 1.395 4.635 0 1.8-.465 3.435-1.395 4.905-.9 1.47-2.22 2.64-3.96 3.51-1.74.87-3.795 1.305-6.165 1.305Z"
                />
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path
                      d="M36.061 266.692H56.36v18.147H36.061z"
                      style={{
                        fill: "purple",
                        fillOpacity: 1,
                        strokeWidth: 0.264583,
                      }}
                    />
                  </clipPath>
                </defs>
                <path
                  d="M42.32 18.844V7.992h14.126v21.702H42.32Z"
                  style={{
                    fill: "#fefefe",
                    strokeWidth: 0.0189204,
                  }}
                  transform="matrix(.57654 0 0 .57653 -3.77 -.913)"
                />
                <path
                  d="M166.84 38.111a1.35 1.35 0 0 0-1.354 1.354v38.793c0 .75.604 1.353 1.354 1.353h12.418a1.35 1.35 0 0 0 1.353-1.353V56.916h14.467v21.342c0 .75.604 1.353 1.354 1.353h12.418a1.35 1.35 0 0 0 1.353-1.353V39.465a1.35 1.35 0 0 0-1.353-1.354h-29.592z"
                  style={{
                    fill: "#ff0",
                    fillOpacity: 1,
                    strokeWidth: 1,
                  }}
                  transform="matrix(.15254 0 0 .15255 -3.77 -.913)"
                />
                <path
                  d="M38.707 34.451c-.714 0-1.289.575-1.289 1.29v83.343c0 .714.575 1.289 1.289 1.289h175.285c.715 0 1.29-.575 1.29-1.289V35.74c0-.714-.575-1.289-1.29-1.289zm135.363 5.91c.256.012.515.042.774.09 2.254.423 4.443 2.624 4.869 4.895.44 2.35-1.137 5.122-3.54 6.213-3.283 1.491-7.147-.328-8.206-3.864-1.098-3.665 2.264-7.508 6.103-7.334zm13.762 0c.256.012.512.042.772.09 2.254.423 4.443 2.624 4.869 4.895.44 2.35-1.138 5.122-3.54 6.213-3.284 1.491-7.147-.328-8.206-3.864-1.099-3.665 2.265-7.508 6.105-7.334zm14.08 0c.256.012.513.042.772.09 2.254.423 4.443 2.624 4.869 4.895.44 2.35-1.137 5.122-3.54 6.213-3.284 1.491-7.147-.328-8.206-3.864-1.098-3.665 2.266-7.508 6.105-7.334zM187.52 66.88c3.495 0 6.08 2.518 6.08 5.922 0 2.339-1.172 4.243-3.268 5.312-2.15 1.097-5.214.686-7.086-.953-1.002-.877-1.807-2.819-1.807-4.363 0-3.4 2.586-5.918 6.08-5.918zm-13.45.043c.256.012.515.041.774.09 2.254.423 4.443 2.623 4.869 4.894.44 2.35-1.137 5.12-3.54 6.211-3.283 1.492-7.147-.325-8.206-3.861-1.098-3.665 2.264-7.509 6.103-7.334zm27.842 0c.256.012.513.041.772.09 2.254.423 4.443 2.623 4.869 4.894.44 2.35-1.137 5.12-3.54 6.211-3.284 1.492-7.147-.325-8.206-3.861-1.098-3.665 2.266-7.509 6.105-7.334zM173.76 93.76c3.496 0 6.08 2.516 6.08 5.92 0 2.339-1.172 4.244-3.268 5.314-2.15 1.097-5.214.684-7.086-.955-1.002-.877-1.806-2.819-1.806-4.363 0-3.4 2.585-5.916 6.08-5.916zm13.76 0c3.495 0 6.08 2.516 6.08 5.92 0 2.339-1.172 4.244-3.268 5.314-2.15 1.097-5.214.684-7.086-.955-1.002-.877-1.807-2.819-1.807-4.363 0-3.4 2.586-5.916 6.08-5.916zm14.08 0c3.495 0 6.08 2.516 6.08 5.92 0 2.339-1.172 4.244-3.268 5.314-2.15 1.097-5.214.684-7.086-.955-1.002-.877-1.806-2.819-1.806-4.363 0-3.4 2.585-5.916 6.08-5.916z"
                  style={{
                    fill: "#767776",
                    strokeWidth: 0.32,
                  }}
                  transform="matrix(.15254 0 0 .15255 -3.77 -.913)"
                />
                <path
                  d="M22.225 63.584c-9.433-.053-8.71-.002-10.19-.728-.65-.319-.921-.517-1.495-1.09-.574-.574-.773-.847-1.091-1.495-.758-1.543-.686 1.133-.686-25.473 0-26.606-.072-23.93.686-25.473.318-.649.517-.921 1.09-1.495.574-.573.847-.772 1.495-1.09 1.537-.755-.601-.687 21.325-.687 21.925 0 19.788-.068 21.324.686.649.319.921.518 1.495 1.091.573.574.772.846 1.09 1.495.758 1.543.686-1.133.686 25.473 0 26.606.072 23.93-.686 25.473-.318.648-.517.92-1.09 1.494-.574.574-.846.772-1.495 1.09-1.026.504-1.583.64-2.825.688-1.681.065-20.67.091-29.633.04zm32.564-34.386c.67-.314 1.129-.761 1.45-1.414.246-.5.276-.638.276-1.284 0-.645-.03-.783-.276-1.283-.321-.653-.78-1.1-1.45-1.414l-.475-.224H12.319l-.476.224a2.902 2.902 0 0 0-1.45 1.414c-.245.5-.275.638-.275 1.282 0 .6.037.8.22 1.19.39.832 1.015 1.382 1.878 1.652.292.092 4.135.11 21.227.096l20.87-.016zm0-7.112c.67-.314 1.129-.761 1.45-1.414.246-.5.276-.638.276-1.284 0-.645-.03-.783-.276-1.283-.321-.653-.78-1.1-1.45-1.414l-.475-.224H12.319l-.476.224a2.902 2.902 0 0 0-1.45 1.414c-.245.5-.275.638-.275 1.282 0 .6.037.8.22 1.19.39.832 1.015 1.382 1.878 1.652.292.092 4.135.11 21.227.096l20.87-.016zm0-7.027c.67-.314 1.129-.762 1.45-1.414.246-.5.276-.639.276-1.284s-.03-.784-.276-1.284c-.321-.652-.78-1.1-1.45-1.414l-.475-.223H12.319l-.476.223a2.91 2.91 0 0 0-1.45 1.414c-.245.5-.275.639-.275 1.282 0 .6.037.8.22 1.191.39.831 1.015 1.381 1.878 1.652.292.092 4.135.109 21.227.096l20.87-.016z"
                  style={{
                    fill: "#02f402",
                    strokeWidth: 0.0846667,
                  }}
                  transform="matrix(.57654 0 0 .57653 -3.77 -.913)"
                />
                <path
                  d="M16.535 39.881a8.588 8.588 0 0 0-.417.013c-.557.03-1.098.109-1.393.224-.614.24-1.128.687-1.414 1.23-.202.384-.23.529-.23 1.24 0 .903.088 1.143.604 1.644.396.385.979.598 2.448.896 1.853.376 2.24.597 2.24 1.285 0 .772-.561 1.18-1.632 1.184-1.085.004-1.706-.323-1.932-1.015-.056-.171-.144-.34-.195-.374-.052-.034-.422-.063-.824-.064-.888-.002-.965.057-.837.631.276 1.23 1.081 1.974 2.483 2.295 1.172.268 2.833.01 3.675-.57 1.228-.844 1.52-2.847.56-3.837-.444-.456-1.039-.698-2.421-.985-1.651-.343-1.796-.387-2.09-.635-.215-.18-.258-.279-.258-.584 0-.683.523-1.056 1.481-1.056.89 0 1.464.327 1.673.954l.12.357h1.678l-.009-.474c-.02-1.09-.894-1.978-2.239-2.277-.27-.06-.659-.085-1.071-.082zm33.95 0a8.588 8.588 0 0 0-.416.013c-.557.03-1.097.109-1.392.224-.615.24-1.129.687-1.415 1.23-.202.384-.229.529-.23 1.24 0 .903.088 1.143.604 1.644.396.385.98.598 2.448.896 1.853.376 2.24.597 2.24 1.285 0 .772-.56 1.18-1.631 1.184-1.085.004-1.707-.323-1.933-1.015-.056-.171-.143-.34-.195-.374-.051-.034-.422-.063-.824-.064-.888-.002-.965.057-.836.631.276 1.23 1.08 1.974 2.482 2.295 1.172.268 2.833.01 3.676-.57 1.227-.844 1.52-2.847.559-3.837-.443-.456-1.038-.698-2.42-.985-1.652-.343-1.797-.387-2.092-.635-.214-.18-.258-.279-.258-.584 0-.683.525-1.056 1.483-1.056.89 0 1.463.327 1.672.954l.12.357h1.679l-.01-.474c-.02-1.09-.894-1.978-2.238-2.277-.27-.06-.66-.085-1.072-.082zm-5.446.081c-.657 0-.763.02-.84.164-.056.105-.088 1.368-.088 3.52v3.356l-.247.248c-.21.209-.315.247-.681.247-.645 0-.816-.205-.89-1.067a7.664 7.664 0 0 0-.091-.777c-.026-.082-.253-.103-.904-.085l-.87.025v.804c0 1.497.556 2.308 1.827 2.665.569.16 1.546.117 2.195-.094.333-.11.59-.277.903-.588.7-.696.706-.73.706-4.826 0-3.104-.015-3.495-.134-3.54-.074-.029-.473-.052-.886-.052zm-18.134.002c-.432 0-.83.03-.885.065-.055.035-.503 1.45-.995 3.145-.491 1.694-.913 3.1-.936 3.124-.024.024-.057.027-.074.008-.016-.02-.439-1.426-.94-3.125-.5-1.7-.953-3.12-1.006-3.155-.054-.035-.46-.054-.901-.042-.673.018-.808.044-.83.163-.037.188 2.774 8.522 2.925 8.673.08.08.329.117.786.117.603 0 .681-.018.787-.19.212-.345 2.957-8.52 2.906-8.654-.04-.105-.205-.13-.837-.129zm5.608.016a64.154 64.154 0 0 0-1.06.003l-2.455.022-.022 4.397c-.017 3.462.001 4.412.085 4.465.124.08 1.427.094 1.624.019.115-.045.134-.273.135-1.672 0-.891.034-1.672.073-1.735.057-.09.336-.107 1.29-.083 1.72.043 1.768.088 1.769 1.662 0 .545.04 1.132.087 1.305.145.522.25.575 1.14.575.435 0 .85-.024.924-.052.178-.068.17-.253-.023-.528-.124-.178-.17-.455-.216-1.325-.032-.606-.098-1.251-.146-1.435-.086-.323-.492-.818-.75-.913-.093-.035-.007-.155.32-.446.655-.585.815-.942.819-1.827.003-.644-.026-.782-.253-1.227a2.116 2.116 0 0 0-1.501-1.133c-.208-.043-.874-.069-1.84-.073zm-.85 1.594c.181 0 .404.004.676.01l1.372.03.247.277c.21.235.247.347.247.745 0 .55-.154.895-.463 1.036-.236.108-2.764.147-2.867.044-.083-.083-.066-1.913.019-2.048.043-.068.222-.095.768-.094zm5.844 5.495v.885c0 .629.031.897.106.927.177.072 1.538.059 1.655-.015.08-.05.102-.294.084-.91l-.025-.839-.91-.024z"
                  style={{
                    fill: "#000",
                    strokeWidth: 0.0846667,
                  }}
                  transform="matrix(.57654 0 0 .57653 -3.77 -.913)"
                />
                <path
                  d="M115.715 236.383a.602.602 0 0 0-.604.603v12.047l.014 1.498.086 9.03-.1.125v13.777h-62.84l-2.095.992a12.68 12.68 0 0 0-6.12 6.121c-.919 1.94-1.017 2.432-1.017 5.184 0 2.751.098 3.243 1.018 5.183a12.68 12.68 0 0 0 6.119 6.121l2.144 1.016 31.026.08 5.91.016h77.473l5.605-.016 29.426-.082 2.144-1.015a12.676 12.676 0 0 0 6.12-6.12c.919-1.94 1.015-2.432 1.015-5.183s-.096-3.245-1.016-5.186a12.676 12.676 0 0 0-6.119-6.119l-2.095-.992h-60.313v-36.477a.602.602 0 0 0-.603-.603z"
                  style={{
                    fill: "#999998",
                    strokeWidth: 0.32,
                  }}
                  transform="matrix(.15254 0 0 .15255 -3.77 -.913)"
                />
                <path
                  d="M42.415 280.972c-.581-.136-1.244-.507-1.76-.986-.558-.516-.824-.918-1.114-1.68-.184-.485-.19-.592-.186-3.422.005-3.115.04-3.468.427-4.285.26-.552 1.02-1.398 1.514-1.687.833-.488 1.247-.575 2.753-.575s1.92.087 2.753.575c.494.29 1.253 1.135 1.514 1.687.387.817.422 1.17.427 4.285.004 2.83-.002 2.937-.186 3.423-.29.761-.556 1.163-1.114 1.68-.533.493-1.171.845-1.795.988-.452.105-2.787.102-3.233-.003zM32.28 264.383c-9.32-.055-8.772-.018-10.117-.672-1.642-.798-2.859-2.304-3.32-4.109-.144-.562-.152-1.79-.152-24.088 0-22.298.008-23.525.152-24.087a6.293 6.293 0 0 1 3.32-4.11c1.42-.69-.52-.632 21.209-.632 21.728 0 19.79-.057 21.209.633 1.641.798 2.858 2.304 3.32 4.109.143.562.15 1.79.15 24.087 0 22.298-.007 23.526-.15 24.088-.462 1.805-1.68 3.311-3.32 4.109-.886.43-1.555.582-2.794.632-1.669.067-20.548.093-29.507.04zm24.451-35.887c.555-.283.865-.787.865-1.406 0-.9-.684-1.566-1.61-1.566-.924 0-1.608.666-1.608 1.565 0 .409.213.923.478 1.155.495.433 1.306.542 1.875.252zm3.64 0c.555-.283.865-.787.865-1.406 0-.9-.683-1.566-1.608-1.566s-1.61.666-1.61 1.565c0 .409.214.923.479 1.155.495.433 1.306.542 1.875.252zm3.726 0c.555-.283.865-.787.865-1.406 0-.9-.684-1.566-1.61-1.566-.924 0-1.608.666-1.608 1.565 0 .409.213.923.478 1.155.495.433 1.306.542 1.875.252zm-7.472-7.11c.636-.29 1.054-1.023.937-1.644-.113-.601-.692-1.183-1.288-1.295-1.097-.206-2.13.882-1.82 1.916.28.936 1.302 1.417 2.171 1.022zm3.747-.002c.554-.283.864-.787.864-1.406 0-.9-.683-1.566-1.608-1.566s-1.61.666-1.61 1.565c0 .41.214.923.479 1.155.495.433 1.306.543 1.875.252zm3.62.001c.635-.288 1.053-1.022.936-1.643-.113-.601-.692-1.183-1.288-1.295-1.097-.206-2.13.882-1.82 1.916.28.936 1.302 1.417 2.171 1.022zm-7.367-7.027c.636-.289 1.054-1.022.937-1.644-.113-.6-.692-1.183-1.288-1.295-1.097-.205-2.13.883-1.82 1.917.28.936 1.302 1.417 2.171 1.022zm3.641 0c.636-.289 1.053-1.022.937-1.644-.113-.6-.692-1.183-1.289-1.295-1.096-.205-2.129.883-1.82 1.917.281.936 1.303 1.417 2.172 1.022zm3.725 0c.636-.289 1.054-1.022.937-1.644-.113-.6-.692-1.183-1.288-1.295-1.097-.205-2.13.883-1.82 1.917.28.936 1.302 1.417 2.171 1.022z"
                  clipPath="url(#a)"
                  style={{
                    fill: "#fd7f00",
                    strokeWidth: 0.0846667,
                  }}
                  transform="matrix(.57654 0 0 .57653 -9.65 -116.597)"
                />
                <path
                  d="M33.359 6.053c-21.926 0-19.788-.069-21.325.686-.648.319-.92.517-1.494 1.091s-.772.846-1.09 1.495c-.759 1.543-.687-1.133-.687 25.473 0 26.606-.072 23.93.686 25.473.319.648.517.92 1.09 1.494.575.574.846.772 1.495 1.09 1.48.727.758.676 10.191.729 8.964.05 27.952.024 29.633-.041 1.242-.048 1.799-.184 2.825-.687.649-.319.92-.517 1.495-1.09.573-.574.772-.847 1.09-1.495.758-1.543.686 1.133.686-25.473 0-26.606.072-23.93-.686-25.473-.318-.649-.517-.921-1.09-1.495-.574-.573-.847-.772-1.495-1.09-1.537-.755.602-.687-21.324-.687ZM12.319 9.44h41.995l.476.223a2.914 2.914 0 0 1 1.45 1.414c.245.5.275.639.275 1.284s-.03.784-.276 1.284c-.321.652-.78 1.1-1.45 1.414l-.475.223-20.87.016c-17.093.013-20.935-.005-21.228-.096-.863-.27-1.488-.82-1.878-1.652-.183-.39-.22-.59-.22-1.19 0-.644.03-.783.276-1.283.321-.652.78-1.1 1.45-1.414zm0 7.027h41.995l.476.224c.669.313 1.128.76 1.45 1.413.245.5.275.64.275 1.285 0 .645-.03.783-.276 1.283-.321.653-.78 1.1-1.45 1.414l-.475.223-20.87.016c-17.093.013-20.935-.005-21.228-.096-.863-.27-1.488-.82-1.878-1.651-.183-.391-.22-.591-.22-1.192 0-.643.03-.782.276-1.282a2.9 2.9 0 0 1 1.45-1.413zm0 7.113h41.995l.476.223c.669.314 1.128.761 1.45 1.414.245.5.275.638.275 1.283 0 .646-.03.784-.276 1.284-.321.653-.78 1.1-1.45 1.414l-.475.224-20.87.015c-17.093.013-20.935-.004-21.228-.096-.863-.27-1.488-.82-1.878-1.651-.183-.39-.22-.591-.22-1.191 0-.644.03-.783.276-1.282.321-.653.78-1.1 1.45-1.414zm20.955 8.833c6.13 0 12.259.046 12.83.139a12.478 12.478 0 0 1 6.152 2.89c2.046 1.798 3.473 4.41 3.923 7.185.165 1.02.165 3.726 0 4.746-.45 2.775-1.877 5.387-3.923 7.185a12.477 12.477 0 0 1-6.153 2.89c-1.089.177-24.692.17-25.74-.007-2.202-.372-4.402-1.417-6.071-2.883-2.046-1.798-3.473-4.41-3.922-7.185-.166-1.02-.166-3.726 0-4.746a12.476 12.476 0 0 1 2.89-6.153c1.797-2.046 4.41-3.473 7.184-3.923.571-.092 6.7-.138 12.83-.138zm-10.278 4.02c.062-.009.125 0 .188 0-.063 0-.126-.009-.188 0z"
                  style={{
                    fill: "#017801",
                    strokeWidth: 0.0846667,
                  }}
                  transform="matrix(.57654 0 0 .57653 -3.77 -.913)"
                />
                <path
                  d="M16.417 9.252c-.072.018-.142.04-.213.061h.12l.105-.034zm-5.403.16c.132.019.265.028.398.026v-.003a14.897 14.897 0 0 1-.398-.023Zm4.417 1.033-.233.027-.233.027-.023 1.714-.023 1.715h.512v-1.525h1.778v1.525h.422v-3.472h-.422v1.524H15.43v-.767zm2.625.011v.423h1.1v3.049h.508v-3.049h1.101v-.423H19.41Zm2.878 0v.423h1.1v3.049h.509v-3.049h1.1v-.423H22.29Zm3.217 0v3.472h.424v-1.44h1.286l.276-.13.276-.131.116-.217.116-.218v-.64l-.116-.217-.116-.217-.276-.131-.276-.13h-.854zm.424.423h1.24l.184.197.184.196v.442l-.222.176-.224.175h-1.162v-.593zm-9.144 6.593-.233.027-.233.027-.023 1.715-.023 1.714h.512V19.43h1.778v1.524h.422v-3.471h-.422v1.524H15.43v-.768zm2.625.012v.423h1.1v3.048h.508v-3.048h1.101v-.423H19.41Zm2.878 0v.423h1.1v3.048h.509v-3.048h1.1v-.423H22.29Zm3.217 0v3.471h.424v-1.44h1.286l.276-.13.276-.13.116-.218.116-.217v-.64l-.116-.218-.116-.217-.276-.13-.276-.131h-.854zm.424.423h1.24l.184.196.184.196v.442l-.222.176-.224.175h-1.162V18.5Zm-9.144 6.677-.233.027-.233.027-.023 1.714-.023 1.715h.512v-1.524h1.778v1.524h.422v-3.472h-.422v1.525H15.43v-.768zm2.625.011v.424h1.1v3.048h.508v-3.048h1.101v-.424H19.41Zm2.878 0v.424h1.1v3.048h.509v-3.048h1.1v-.424H22.29Zm3.217 0v3.472h.424v-1.44h1.286l.276-.13.276-.131.116-.217.116-.217v-.64l-.116-.218-.116-.217-.276-.13-.276-.132h-.854zm.424.424h1.24l.184.196.184.196v.442l-.222.176-.224.175h-1.162v-.592z"
                  style={{
                    fill: "#666",
                    fillOpacity: 1,
                    strokeWidth: 0.0846667,
                  }}
                  transform="matrix(.57654 0 0 .57653 -3.77 -.913)"
                />
              </svg>
	),
	project: {
		title: "SVRJS",
		link: "https://svrjs.org",
	},
	footer: {
		component: null,
	},
	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== "/") {
			return {
				titleTemplate: "%s – SVRJS",
			};
		}
	},
	primaryHue: 136,
	primarySaturation: 75,
	// banner: {
	// 	key: "svrjs",
	// 	text: <a href="https://svrjs.org">🎉 Check out SVRJS Now. Read more →</a>,
	// },
};
