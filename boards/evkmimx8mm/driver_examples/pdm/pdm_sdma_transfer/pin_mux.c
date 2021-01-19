/*
 * Copyright 2018 NXP
 * All rights reserved.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 *
 */


/***********************************************************************************************************************
 * This file was generated by the MCUXpresso Config Tools. Any manual edits made to this file
 * will be overwritten if the respective MCUXpresso Config Tools is used to update this file.
 **********************************************************************************************************************/

/*
 * TEXT BELOW IS USED AS SETTING FOR TOOLS *************************************
!!GlobalInfo
product: Pins v4.1
processor: MIMX8MM6xxxLZ
package_id: MIMX8MM6DVTLZ
mcu_data: ksdk2_0
processor_version: 0.0.0
 * BE CAREFUL MODIFYING THIS COMMENT - IT IS YAML SETTINGS FOR TOOLS ***********
 */

#include "fsl_common.h"
#include "fsl_iomuxc.h"
#include "pin_mux.h"

/* FUNCTION ************************************************************************************************************
 *
 * Function Name : BOARD_InitBootPins
 * Description   : Calls initialization functions.
 *
 * END ****************************************************************************************************************/
void BOARD_InitBootPins(void)
{
}

/*
 * TEXT BELOW IS USED AS SETTING FOR TOOLS *************************************
BOARD_InitPins:
- options: {callFromInitBoot: 'false', coreID: m4}
- pin_list:
  - {pin_num: F19, peripheral: UART4, signal: uart_rx, pin_signal: UART4_RXD, PE: Disabled, PUE: Disabled, DSE: X6_0}
  - {pin_num: F18, peripheral: UART4, signal: uart_tx, pin_signal: UART4_TXD, PE: Disabled, PUE: Disabled, DSE: X6_0}
  - {pin_num: AD18, peripheral: PDM, signal: 'pdm_bit_stream, 0', pin_signal: SAI5_RXD0, PE: Enabled, PUE: Enabled, DSE: X6_1}
  - {pin_num: AC14, peripheral: PDM, signal: 'pdm_bit_stream, 1', pin_signal: SAI5_RXD1, PE: Enabled, PUE: Enabled, DSE: X6_1}
  - {pin_num: AD13, peripheral: PDM, signal: 'pdm_bit_stream, 2', pin_signal: SAI5_RXD2, PE: Enabled, PUE: Enabled, DSE: X6_1}
  - {pin_num: AC13, peripheral: PDM, signal: 'pdm_bit_stream, 3', pin_signal: SAI5_RXD3, PE: Enabled, PUE: Enabled, DSE: X6_1}
  - {pin_num: AC15, peripheral: PDM, signal: pdm_clk, pin_signal: SAI5_RXC, PE: Disabled, DSE: X6_1}
 * BE CAREFUL MODIFYING THIS COMMENT - IT IS YAML SETTINGS FOR TOOLS ***********
 */

/* FUNCTION ************************************************************************************************************
 *
 * Function Name : BOARD_InitPins
 * Description   : Configures pin routing and optionally pin electrical features.
 *
 * END ****************************************************************************************************************/
void BOARD_InitPins(void) {                                /*!< Function assigned for the core: Cortex-M4[m4] */
    IOMUXC_SetPinMux(IOMUXC_SAI5_RXC_PDM_CLK, 0U);
    IOMUXC_SetPinConfig(IOMUXC_SAI5_RXC_PDM_CLK, 
                        IOMUXC_SW_PAD_CTL_PAD_DSE(7U) |
                        IOMUXC_SW_PAD_CTL_PAD_FSEL(2U));
    IOMUXC_SetPinMux(IOMUXC_SAI5_RXD0_PDM_BIT_STREAM0, 0U);
    IOMUXC_SetPinConfig(IOMUXC_SAI5_RXD0_PDM_BIT_STREAM0, 
                        IOMUXC_SW_PAD_CTL_PAD_DSE(7U) |
                        IOMUXC_SW_PAD_CTL_PAD_FSEL(2U) |
                        IOMUXC_SW_PAD_CTL_PAD_PUE_MASK |
                        IOMUXC_SW_PAD_CTL_PAD_PE_MASK);
    IOMUXC_SetPinMux(IOMUXC_SAI5_RXD1_PDM_BIT_STREAM1, 0U);
    IOMUXC_SetPinConfig(IOMUXC_SAI5_RXD1_PDM_BIT_STREAM1, 
                        IOMUXC_SW_PAD_CTL_PAD_DSE(7U) |
                        IOMUXC_SW_PAD_CTL_PAD_FSEL(2U) |
                        IOMUXC_SW_PAD_CTL_PAD_PUE_MASK |
                        IOMUXC_SW_PAD_CTL_PAD_PE_MASK);
    IOMUXC_SetPinMux(IOMUXC_SAI5_RXD2_PDM_BIT_STREAM2, 0U);
    IOMUXC_SetPinConfig(IOMUXC_SAI5_RXD2_PDM_BIT_STREAM2, 
                        IOMUXC_SW_PAD_CTL_PAD_DSE(7U) |
                        IOMUXC_SW_PAD_CTL_PAD_FSEL(2U) |
                        IOMUXC_SW_PAD_CTL_PAD_PUE_MASK |
                        IOMUXC_SW_PAD_CTL_PAD_PE_MASK);
    IOMUXC_SetPinMux(IOMUXC_SAI5_RXD3_PDM_BIT_STREAM3, 0U);
    IOMUXC_SetPinConfig(IOMUXC_SAI5_RXD3_PDM_BIT_STREAM3, 
                        IOMUXC_SW_PAD_CTL_PAD_DSE(7U) |
                        IOMUXC_SW_PAD_CTL_PAD_FSEL(2U) |
                        IOMUXC_SW_PAD_CTL_PAD_PUE_MASK |
                        IOMUXC_SW_PAD_CTL_PAD_PE_MASK);
    IOMUXC_SetPinMux(IOMUXC_UART4_RXD_UART4_RX, 0U);
    IOMUXC_SetPinConfig(IOMUXC_UART4_RXD_UART4_RX, 
                        IOMUXC_SW_PAD_CTL_PAD_DSE(6U) |
                        IOMUXC_SW_PAD_CTL_PAD_FSEL(2U));
    IOMUXC_SetPinMux(IOMUXC_UART4_TXD_UART4_TX, 0U);
    IOMUXC_SetPinConfig(IOMUXC_UART4_TXD_UART4_TX, 
                        IOMUXC_SW_PAD_CTL_PAD_DSE(6U) |
                        IOMUXC_SW_PAD_CTL_PAD_FSEL(2U));
}

/***********************************************************************************************************************
 * EOF
 **********************************************************************************************************************/
