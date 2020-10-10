/*
 * Copyright 2017-2018 NXP
 * All rights reserved.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
#ifndef __RTE_DEVICE_H
#define __RTE_DEVICE_H

/* LPI2C instance mapping */
#define LPI2C0 CM4_0__LPI2C
#define LPI2C1 CM4_1__LPI2C
#define LPI2C2 DMA__LPI2C0
#define LPI2C3 DMA__LPI2C1
#define LPI2C4 DMA__LPI2C2
#define LPI2C5 DMA__LPI2C3
#define LPI2C6 DMA__LPI2C4

/* Driver name mapping. */
#define RTE_I2C0        0
#define RTE_I2C0_DMA_EN 0
#define RTE_I2C1        0
#define RTE_I2C1_DMA_EN 0
#define RTE_I2C2        1
#define RTE_I2C2_DMA_EN 0
#define RTE_I2C3        0
#define RTE_I2C3_DMA_EN 0
#define RTE_I2C4        0
#define RTE_I2C4_DMA_EN 0
#define RTE_I2C5        0
#define RTE_I2C5_DMA_EN 0
#define RTE_I2C6        0
#define RTE_I2C6_DMA_EN 0

/* SPI instance name mapping */
#define LPSPI0 DMA__LPSPI0
#define LPSPI1 DMA__LPSPI1
#define LPSPI2 DMA__LPSPI2
#define LPSPI3 DMA__LPSPI3

/* Driver name mapping. */
#define RTE_SPI0        0
#define RTE_SPI0_DMA_EN 0
#define RTE_SPI1        0
#define RTE_SPI1_DMA_EN 0
#define RTE_SPI2        1
#define RTE_SPI2_DMA_EN 0
#define RTE_SPI3        0
#define RTE_SPI3_DMA_EN 0

/* USART instance mapping */
#define LPUART0 CM4_0__LPUART
#define LPUART1 CM4_1__LPUART
#define LPUART2 DMA__LPUART0
#define LPUART3 DMA__LPUART1
#define LPUART4 DMA__LPUART2
#define LPUART5 DMA__LPUART3
#define LPUART6 DMA__LPUART4

/* Driver name mapping. */
#define RTE_USART0        0
#define RTE_USART0_DMA_EN 0
#define RTE_USART1        0
#define RTE_USART1_DMA_EN 0
#define RTE_USART2        0
#define RTE_USART2_DMA_EN 0
#define RTE_USART3        0
#define RTE_USART3_DMA_EN 0
#define RTE_USART4        1
#define RTE_USART4_DMA_EN 0
#define RTE_USART5        0
#define RTE_USART5_DMA_EN 0
#define RTE_USART6        0
#define RTE_USART6_DMA_EN 0

/* LPI2C configuration. */
/*Note: LPI2C0 and LPI2C1 not support DMA */
#define RTE_I2C2_DMA_TX_CH       1
#define RTE_I2C2_DMA_TX_PERI_SEL 1
#define RTE_I2C2_DMA_TX_DMA_BASE DMA__EDMA1
#define RTE_I2C2_DMA_RX_CH       0
#define RTE_I2C2_DMA_RX_PERI_SEL 0
#define RTE_I2C2_DMA_RX_DMA_BASE DMA__EDMA1

#define RTE_I2C3_DMA_TX_CH       3
#define RTE_I2C3_DMA_TX_PERI_SEL 3
#define RTE_I2C3_DMA_TX_DMA_BASE DMA__EDMA1
#define RTE_I2C3_DMA_RX_CH       2
#define RTE_I2C3_DMA_RX_PERI_SEL 2
#define RTE_I2C3_DMA_RX_DMA_BASE DMA__EDMA1

#define RTE_I2C4_DMA_TX_CH       5
#define RTE_I2C4_DMA_TX_PERI_SEL 5
#define RTE_I2C4_DMA_TX_DMA_BASE DMA__EDMA1
#define RTE_I2C4_DMA_RX_CH       4
#define RTE_I2C4_DMA_RX_PERI_SEL 4
#define RTE_I2C4_DMA_RX_DMA_BASE DMA__EDMA1

#define RTE_I2C5_DMA_TX_CH       7
#define RTE_I2C5_DMA_TX_PERI_SEL 7
#define RTE_I2C5_DMA_TX_DMA_BASE DMA__EDMA1
#define RTE_I2C5_DMA_RX_CH       6
#define RTE_I2C5_DMA_RX_PERI_SEL 6
#define RTE_I2C5_DMA_RX_DMA_BASE DMA__EDMA1

#define RTE_I2C6_DMA_TX_CH       9
#define RTE_I2C6_DMA_TX_PERI_SEL 9
#define RTE_I2C6_DMA_TX_DMA_BASE DMA__EDMA1
#define RTE_I2C6_DMA_RX_CH       8
#define RTE_I2C6_DMA_RX_PERI_SEL 8
#define RTE_I2C6_DMA_RX_DMA_BASE DMA__EDMA1

/* UART configuration. */
#define USART_RX_BUFFER_LEN     64
#define USART4_RX_BUFFER_ENABLE 1

/* Note: LPUART0, LPUART1 not support DMA mode */
#define RTE_USART2_DMA_TX_CH       13
#define RTE_USART2_DMA_TX_PERI_SEL 13
#define RTE_USART2_DMA_TX_DMA_BASE DMA__EDMA0
#define RTE_USART2_DMA_RX_CH       12
#define RTE_USART2_DMA_RX_PERI_SEL 12
#define RTE_USART2_DMA_RX_DMA_BASE DMA__EDMA0

#define RTE_USART3_DMA_TX_CH       15
#define RTE_USART3_DMA_TX_PERI_SEL 15
#define RTE_USART3_DMA_TX_DMA_BASE DMA__EDMA0
#define RTE_USART3_DMA_RX_CH       14
#define RTE_USART3_DMA_RX_PERI_SEL 14
#define RTE_USART3_DMA_RX_DMA_BASE DMA__EDMA0

#define RTE_USART4_DMA_TX_CH       17
#define RTE_USART4_DMA_TX_PERI_SEL 17
#define RTE_USART4_DMA_TX_DMA_BASE DMA__EDMA0
#define RTE_USART4_DMA_RX_CH       16
#define RTE_USART4_DMA_RX_PERI_SEL 16
#define RTE_USART4_DMA_RX_DMA_BASE DMA__EDMA0

#define RTE_USART5_DMA_TX_CH       19
#define RTE_USART5_DMA_TX_PERI_SEL 19
#define RTE_USART5_DMA_TX_DMA_BASE DMA__EDMA0
#define RTE_USART5_DMA_RX_CH       18
#define RTE_USART5_DMA_RX_PERI_SEL 18
#define RTE_USART5_DMA_RX_DMA_BASE DMA__EDMA0

#define RTE_USART6_DMA_TX_CH       21
#define RTE_USART6_DMA_TX_PERI_SEL 21
#define RTE_USART6_DMA_TX_DMA_BASE DMA__EDMA0
#define RTE_USART6_DMA_RX_CH       20
#define RTE_USART6_DMA_RX_PERI_SEL 20
#define RTE_USART6_DMA_RX_DMA_BASE DMA__EDMA0

#endif /* __RTE_DEVICE_H */
