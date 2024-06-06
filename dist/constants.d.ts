import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    BLAST = 81457,
    TAIKO = 167000,
    ARBITRUM_SEPOLIA = 421614,
    BASE_SEPOLIA = 84532
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x2EA9051d5a48eA2350b26306f2b959D262cf67e1";
export declare const FACTORY_ADDRESS_MAP: {
    167000: string;
    84532: string;
    1: string;
    421614: string;
    81457: string;
};
export declare const INIT_CODE_HASH = "0x8615843ab28b4b86b2382dca22cf14f0a6ba9e52cb006531eb574042a5b54a46";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
