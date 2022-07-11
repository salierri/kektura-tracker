import sections from "../data/okt_sections"

function getStrokeColor(strokeCounter) {
  return strokeCounter % 2 === 0 ? '#a9a9a9' : '#102d69';
};

export default function Map() {


  return (
    <div>
      {/*<img className="leaflet-image-layer leaflet-zoom-animated" crossorigin="" src="https://turistaterkepek.hu/serverwa/rest/directories/arcgisoutput/orszagos_kektura/magyarorszag_MapServer/_ags_map5e5aed2b7f044b65a022bec74976d258.png" alt=""
        style={{zIindex: 1, opacity: 1, width: 760, height: 380, position: 'absolute', left: 0, top: 0 }}></img>*/}
      <svg pointerEvents="none" className="leaflet-zoom-animated" width="700" height="456" viewBox="-76 -38 912 456">
        <g>
          <path stroke={getStrokeColor(0)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M46 253L49 252L49 250L51 250L57 244L60 245L63 242L68 249L76 252L78 247L92 258L95 258L97 262L99 262L99 264L96 265L96 269L100 275L109 274L109 272L111 271L111 273"></path>
          <path stroke={getStrokeColor(1)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M111 273L114 272L116 274L117 273L121 275L121 279L119 281L117 289L119 289L119 291L121 289L125 289L123 289L123 295L121 297L122 304L119 307L121 309L120 310L125 313L129 311L135 317L139 317L142 322L146 318L154 323"></path>
          <path stroke={getStrokeColor(2)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M154 323L157 326L157 334L155 334L153 338L150 335L147 336L146 339L150 343L148 347L149 348L147 348L146 351L143 350L144 353L142 355L143 358L151 365"></path>
          <path stroke={getStrokeColor(3)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M151 365L154 362L156 362L156 360L158 360L158 348L160 348L162 344L163 345L165 343L165 341L167 343L173 341L174 342"></path>
          <path stroke={getStrokeColor(4)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M174 342L175 341L177 344L175 356L178 357L179 355"></path>
          <path stroke={getStrokeColor(5)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M179 355L182 358L183 357L182 354L185 351L185 345L183 343L187 339L193 341L193 339L195 339L195 335L198 336L202 334L204 322L208 322"></path>
          <path stroke={getStrokeColor(6)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M208 322L204 311L203 312L205 308L202 307L203 298L200 294"></path>
          <path stroke={getStrokeColor(7)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M200 294L205 289L206 286L205 287L205 281L203 279L212 270L215 269L216 264L226 264L228 268L232 269"></path>
          <path stroke={getStrokeColor(8)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M232 269L234 269L235 267L243 269L245 267L248 268L250 266L253 269L260 266L263 262L265 266L269 266L269 270L274 274L278 270L280 270L280 264L276 262L277 258"></path>
          <path stroke={getStrokeColor(9)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M277 258L283 258L282 249L287 244L294 245L296 247L297 246L291 238L299 233L297 231L302 222L307 221L309 223L311 221"></path>
          <path stroke={getStrokeColor(10)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M311 221L317 221L317 211L313 211L311 209L308 210L306 208L309 205L309 189L313 189L322 184L323 185L322 182L325 181L327 183L333 183L335 185L341 185L342 182"></path>
          <path stroke={getStrokeColor(11)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M342 182L347 184L351 182L355 186L353 189L354 198"></path>
          <path stroke={getStrokeColor(12)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M354 198L355 203L360 208L363 207L365 209L364 210L367 211L367 213L369 213L370 216L372 217"></path>
          <path stroke={getStrokeColor(13)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M372 217L372 215L378 217L375 211L373 211L375 208"></path>
          <path stroke={getStrokeColor(14)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M375 208L375 204L373 202L374 201L362 186L363 183"></path>
          <path stroke={getStrokeColor(15)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M363 183L372 186L374 182L379 179L376 170L374 168L372 170"></path>
          <path stroke={getStrokeColor(16)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M371 169L367 171L369 169L369 161L366 154L368 152L366 150L366 142L369 139L372 140L374 142L375 147L382 148"></path>
          <path stroke={getStrokeColor(17)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M382 148L383 151L381 153L384 158L383 157L385 155L389 157L390 156L390 158L395 159L395 161L398 162L401 156L404 155L402 155L400 151L406 152L408 154L407 148L411 142L415 142L417 144L420 143L422 144L423 147L425 146"></path>
          <path stroke={getStrokeColor(18)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M425 146L429 146L429 142L431 142L431 140L434 139L433 134L431 132L433 128L436 129L440 127L444 131L448 131L448 133L450 133L449 130L452 129L455 135L453 135L453 141L457 141L459 135L462 132L464 132L465 129L469 131L472 130L473 127L475 129L474 133L477 135"></path>
          <path stroke={getStrokeColor(19)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M477 135L479 135L478 136L480 138L481 143L483 144L485 142L498 146L502 150L502 154"></path>
          <path stroke={getStrokeColor(20)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M502 154L503 155L510 152L510 154L512 154L515 151L519 151L521 149L522 150L522 148L528 146L530 142"></path>
          <path stroke={getStrokeColor(21)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M530 142L530 140L533 139L534 136L537 137L541 133L544 134L546 132L547 133L548 131"></path>
          <path stroke={getStrokeColor(22)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M548 131L547 130L551 124L550 121L552 119L550 119L552 117L557 118L557 120L562 119L562 117L566 117L565 116L567 114L566 105L569 98L567 96L567 92L562 87L564 85L560 83L562 77L561 73"></path>
          <path stroke={getStrokeColor(23)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M561 73L559 71L562 60L560 60L560 56L568 54L567 49L565 47L565 39L567 37L568 38L575 35L575 33L580 34L583 31L583 27L585 27L589 23L593 23L594 20L596 20L596 22L599 25"></path>
          <path stroke={getStrokeColor(24)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M599 25L601 25L602 28L598 34L599 35L602 32L610 32L613 41L617 45L618 52L621 51L620 54L623 57L626 56L632 58L635 57L637 59L640 58L639 59L644 60L654 68L658 62L661 62"></path>
          <path stroke={getStrokeColor(25)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M661 62L664 63L664 61L666 61L666 59L668 59L671 56L677 56L679 48L683 48L686 51L694 51L694 57L697 60L702 59L702 57L706 53L714 53"></path>
          <path stroke={getStrokeColor(26)} strokeOpacity="0.8" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round" fill="none" d="M714 53L714 51L711 52L712 51L708 47L705 48L700 45L697 46L695 43L696 40L692 32L692 24L694 22L693 17L691 17L688 20L687 24"></path>
        </g>
      </svg>
    </div>
  )
}
