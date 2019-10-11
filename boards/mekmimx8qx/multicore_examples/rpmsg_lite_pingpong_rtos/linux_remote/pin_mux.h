/*
 * Copyright 2017-2018 NXP
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */


#ifndef _PIN_MUX_H_
#define _PIN_MUX_H_

#include "board.h"

/***********************************************************************************************************************
 * Definitions
 **********************************************************************************************************************/

/* ADC_IN2 (coord V32), FTDI_M40_UART0_RX */
#define BOARD_INITPINS_FTDI_M40_UART0_RX_PERIPHERAL                   M40__UART0   /*!< Device name: M40__UART0 */
#define BOARD_INITPINS_FTDI_M40_UART0_RX_SIGNAL                          uart_rx   /*!< M40__UART0 signal: uart_rx */
#define BOARD_INITPINS_FTDI_M40_UART0_RX_PIN_NAME                        ADC_IN2   /*!< Pin name */
#define BOARD_INITPINS_FTDI_M40_UART0_RX_PIN_FUNCTION_ID            SC_P_ADC_IN2   /*!< Pin function id */
#define BOARD_INITPINS_FTDI_M40_UART0_RX_LABEL               "FTDI_M40_UART0_RX"   /*!< Label */
#define BOARD_INITPINS_FTDI_M40_UART0_RX_NAME                "FTDI_M40_UART0_RX"   /*!< Identifier name */

/* ADC_IN3 (coord V30), FTDI_M40_UART0_TX */
#define BOARD_INITPINS_FTDI_M40_UART0_TX_PERIPHERAL                   M40__UART0   /*!< Device name: M40__UART0 */
#define BOARD_INITPINS_FTDI_M40_UART0_TX_SIGNAL                          uart_tx   /*!< M40__UART0 signal: uart_tx */
#define BOARD_INITPINS_FTDI_M40_UART0_TX_PIN_NAME                        ADC_IN3   /*!< Pin name */
#define BOARD_INITPINS_FTDI_M40_UART0_TX_PIN_FUNCTION_ID            SC_P_ADC_IN3   /*!< Pin function id */
#define BOARD_INITPINS_FTDI_M40_UART0_TX_LABEL               "FTDI_M40_UART0_TX"   /*!< Label */
#define BOARD_INITPINS_FTDI_M40_UART0_TX_NAME                "FTDI_M40_UART0_TX"   /*!< Identifier name */

/* ADC_IN0 (coord U35), M4_I2C0_1V8_SCL */
#define BOARD_INITPINS_M4_I2C0_1V8_SCL_PERIPHERAL                      M40__I2C0   /*!< Device name: M40__I2C0 */
#define BOARD_INITPINS_M4_I2C0_1V8_SCL_SIGNAL                            i2c_scl   /*!< M40__I2C0 signal: i2c_scl */
#define BOARD_INITPINS_M4_I2C0_1V8_SCL_PIN_NAME                          ADC_IN0   /*!< Pin name */
#define BOARD_INITPINS_M4_I2C0_1V8_SCL_PIN_FUNCTION_ID              SC_P_ADC_IN0   /*!< Pin function id */
#define BOARD_INITPINS_M4_I2C0_1V8_SCL_LABEL                   "M4_I2C0_1V8_SCL"   /*!< Label */
#define BOARD_INITPINS_M4_I2C0_1V8_SCL_NAME                    "M4_I2C0_1V8_SCL"   /*!< Identifier name */

/* ADC_IN1 (coord U33), M4_I2C0_1V8_SDA */
#define BOARD_INITPINS_M4_I2C0_1V8_SDA_PERIPHERAL                      M40__I2C0   /*!< Device name: M40__I2C0 */
#define BOARD_INITPINS_M4_I2C0_1V8_SDA_SIGNAL                            i2c_sda   /*!< M40__I2C0 signal: i2c_sda */
#define BOARD_INITPINS_M4_I2C0_1V8_SDA_PIN_NAME                          ADC_IN1   /*!< Pin name */
#define BOARD_INITPINS_M4_I2C0_1V8_SDA_PIN_FUNCTION_ID              SC_P_ADC_IN1   /*!< Pin function id */
#define BOARD_INITPINS_M4_I2C0_1V8_SDA_LABEL                   "M4_I2C0_1V8_SDA"   /*!< Label */
#define BOARD_INITPINS_M4_I2C0_1V8_SDA_NAME                    "M4_I2C0_1V8_SDA"   /*!< Identifier name */

/* USB_SS3_TC1 (coord H14), I2C1_SCL(SS3_SCL) */
#define BOARD_INITPINS_I2C1_SCL_PERIPHERAL                            ADMA__I2C1   /*!< Device name: ADMA__I2C1 */
#define BOARD_INITPINS_I2C1_SCL_SIGNAL                                   i2c_scl   /*!< ADMA__I2C1 signal: i2c_scl */
#define BOARD_INITPINS_I2C1_SCL_PIN_NAME                             USB_SS3_TC1   /*!< Pin name */
#define BOARD_INITPINS_I2C1_SCL_PIN_FUNCTION_ID                 SC_P_USB_SS3_TC1   /*!< Pin function id */
#define BOARD_INITPINS_I2C1_SCL_LABEL                        "I2C1_SCL(SS3_SCL)"   /*!< Label */
#define BOARD_INITPINS_I2C1_SCL_NAME                                  "I2C1_SCL"   /*!< Identifier name */

/* USB_SS3_TC3 (coord C15), I2C1_SDA(SS3_SDA) */
#define BOARD_INITPINS_I2C1_SDA_PERIPHERAL                            ADMA__I2C1   /*!< Device name: ADMA__I2C1 */
#define BOARD_INITPINS_I2C1_SDA_SIGNAL                                   i2c_sda   /*!< ADMA__I2C1 signal: i2c_sda */
#define BOARD_INITPINS_I2C1_SDA_PIN_NAME                             USB_SS3_TC3   /*!< Pin name */
#define BOARD_INITPINS_I2C1_SDA_PIN_FUNCTION_ID                 SC_P_USB_SS3_TC3   /*!< Pin function id */
#define BOARD_INITPINS_I2C1_SDA_LABEL                        "I2C1_SDA(SS3_SDA)"   /*!< Label */
#define BOARD_INITPINS_I2C1_SDA_NAME                                  "I2C1_SDA"   /*!< Identifier name */

/* SPI2_SDO (coord P32), IOEXP_RST_1V8 */
#define BOARD_INITPINS_IOEXP_RST_1V8_GPIO                            LSIO__GPIO1   /*!< GPIO device name: LSIO__GPIO1 */
#define BOARD_INITPINS_IOEXP_RST_1V8_GPIO_PIN                                 1U   /*!< LSIO__GPIO1 pin index: 1 */
#define BOARD_INITPINS_IOEXP_RST_1V8_PIN_NAME                           SPI2_SDO   /*!< Pin name */
#define BOARD_INITPINS_IOEXP_RST_1V8_PIN_FUNCTION_ID               SC_P_SPI2_SDO   /*!< Pin function id */
#define BOARD_INITPINS_IOEXP_RST_1V8_LABEL                       "IOEXP_RST_1V8"   /*!< Label */
#define BOARD_INITPINS_IOEXP_RST_1V8_NAME                        "IOEXP_RST_1V8"   /*!< Identifier name */

/*!
 * @addtogroup pin_mux
 * @{
 */

/***********************************************************************************************************************
 * API
 **********************************************************************************************************************/

#if defined(__cplusplus)
extern "C" {
#endif


/*!
 * @brief Calls initialization functions.
 *
 */
void BOARD_InitBootPins(void);

/*!
 * @brief Configures pin routing and optionally pin electrical features.
 * @param ipc scfw ipchandle.
 *
 */
void BOARD_InitPins(sc_ipc_t ipc);                         /*!< Function assigned for the core: Cortex-M4F[m4] */

#if defined(__cplusplus)
}
#endif

/*!
 * @}
 */
#endif /* _PIN_MUX_H_ */

/***********************************************************************************************************************
 * EOF
 **********************************************************************************************************************/