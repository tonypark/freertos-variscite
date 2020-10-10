var a00017 =
[
    [ "enet_rx_bd_struct_t", "a00017.html#a00271", [
      [ "length", "a00017.html#a8f1b6c5523159bc56b37bfd98b378ab6", null ],
      [ "control", "a00017.html#a01a2213b5bf50b154c4ca4866c6379ea", null ],
      [ "buffer", "a00017.html#a5d13fe112ba7cfb37d8467413b0e7c75", null ]
    ] ],
    [ "enet_tx_bd_struct_t", "a00017.html#a00273", [
      [ "length", "a00017.html#a7f6f448911920d9e7d9ac98f83472e1e", null ],
      [ "control", "a00017.html#a26f3d526bcef8f3c3cd2a0e40760e449", null ],
      [ "buffer", "a00017.html#a54a6524c02ec1e5f6f018fd5f6efca66", null ]
    ] ],
    [ "enet_data_error_stats_t", "a00017.html#a00267", [
      [ "statsRxLenGreaterErr", "a00017.html#a49a9b5fd12c01f4e3fdf8fb3f4e1cbcf", null ],
      [ "statsRxAlignErr", "a00017.html#a7aa8325ffacae6ae6ceea48178683da4", null ],
      [ "statsRxFcsErr", "a00017.html#a961dfc75989fe1d056ee40670b01ee8c", null ],
      [ "statsRxOverRunErr", "a00017.html#a4a75e297619c93fe9d0450ccb6f29c82", null ],
      [ "statsRxTruncateErr", "a00017.html#a09504e8c4095afe2540e064d9fec42b0", null ]
    ] ],
    [ "enet_frame_info_t", "a00017.html#a00268", [
      [ "context", "a00017.html#ad3987e22d881f422f1d8bcb861eb02a9", null ]
    ] ],
    [ "enet_tx_dirty_ring_t", "a00017.html#a00274", [
      [ "txDirtyBase", "a00017.html#a7af88381e15c470471345f93e6b95efb", null ],
      [ "txGenIdx", "a00017.html#a433b260bfe4ae02b7046455dcc78df0d", null ],
      [ "txConsumIdx", "a00017.html#abca8f4711537a4e4bec412628b571690", null ],
      [ "txRingLen", "a00017.html#ae445fdbfa651b36e253b53cbcfcb7960", null ],
      [ "isFull", "a00017.html#a04b76eb9bd582eed4c15f4913c04e025", null ]
    ] ],
    [ "enet_buffer_config_t", "a00017.html#a00265", [
      [ "rxBdNumber", "a00017.html#a65e1faa923f03d01a64c133a3830bc7f", null ],
      [ "txBdNumber", "a00017.html#a4f2cfe59fad3a3ea6274ef33edc66676", null ],
      [ "rxBuffSizeAlign", "a00017.html#a8d0b8944b8d70e3c624718e553789136", null ],
      [ "txBuffSizeAlign", "a00017.html#a1523cf4ee9537fb4fc12dc210680f1b1", null ],
      [ "rxBdStartAddrAlign", "a00017.html#ae90713ccb39a0bb92275a458f03c5dce", null ],
      [ "txBdStartAddrAlign", "a00017.html#a9fc178ed9e15d39b55c62d3ad26e05db", null ],
      [ "rxBufferAlign", "a00017.html#a0917bce7024fa1d557f742e731849768", null ],
      [ "txBufferAlign", "a00017.html#a70bca73b0157bb5a6985f2c9ecdc4ac8", null ],
      [ "rxMaintainEnable", "a00017.html#a652bd28b0952d037e56876a2246e72b9", null ],
      [ "txMaintainEnable", "a00017.html#aff5a3ae2854130484aa7e180c45df529", null ],
      [ "txFrameInfo", "a00017.html#aaeebb32b259a0fbbfa6b000b3a143035", null ]
    ] ],
    [ "enet_intcoalesce_config_t", "a00017.html#a00269", [
      [ "txCoalesceFrameCount", "a00017.html#a920e25d5e0e56e1b94ea3185da2b97f6", null ],
      [ "txCoalesceTimeCount", "a00017.html#ab79bf31622cad0e087bef459f8c08ca9", null ],
      [ "rxCoalesceFrameCount", "a00017.html#ad887a24639564d3f902f42fb3652499b", null ],
      [ "rxCoalesceTimeCount", "a00017.html#a7de52c76cb9c659ab17431d0aa9d4a58", null ]
    ] ],
    [ "enet_avb_config_t", "a00017.html#a00264", [
      [ "rxClassifyMatch", "a00017.html#a1e6eec9fcb2c7a0fe6be18da59c3a658", null ],
      [ "idleSlope", "a00017.html#a6fc9b1ca99ea88bc576839fae924bcde", null ]
    ] ],
    [ "enet_config_t", "a00017.html#a00266", [
      [ "macSpecialConfig", "a00017.html#ae18a59c71607550da3eb35ac6a64ac11", null ],
      [ "interrupt", "a00017.html#ad6126ff38c3d09e8f4b305cc0a45befd", null ],
      [ "rxMaxFrameLen", "a00017.html#a8096267beadb3701fb82163d1e9aa6dd", null ],
      [ "miiMode", "a00017.html#af5d9f50ec02037d29f6ed4202ffdbc1f", null ],
      [ "miiSpeed", "a00017.html#a073bdafc878d858c56533323322be6a9", null ],
      [ "miiDuplex", "a00017.html#a0704352d744c4da14bf1e836e95ff072", null ],
      [ "rxAccelerConfig", "a00017.html#a7458a889dfeb4ccd0b62767486e61bbb", null ],
      [ "txAccelerConfig", "a00017.html#a033caacd25725e29eb07aa98936e6814", null ],
      [ "pauseDuration", "a00017.html#a4ad647d398242d29ca34f03903e119a7", null ],
      [ "rxFifoEmptyThreshold", "a00017.html#a1a0b1d0e07cc8817dc37f0af8cce10f6", null ],
      [ "rxFifoFullThreshold", "a00017.html#af15c6f6b67b8bbdebda299b2137e3c48", null ],
      [ "txFifoWatermark", "a00017.html#a30ec04b6b5c7018f5fa75723778c7bca", null ],
      [ "intCoalesceCfg", "a00017.html#a279342d5258a08ccf05b8643b39d8535", null ],
      [ "ringNum", "a00017.html#a4e45bda961b3da271d4fb482bc375e12", null ]
    ] ],
    [ "enet_tx_bd_ring_t", "a00017.html#a00272", [
      [ "txBdBase", "a00017.html#ac8ea415a5a4e475fc8186a64fe5c7f42", null ],
      [ "txGenIdx", "a00017.html#a02d0c1d6dbec35379899b6d7fded3967", null ],
      [ "txConsumIdx", "a00017.html#acb25ecf9088ef35f7806a0af21ad9893", null ],
      [ "txDescUsed", "a00017.html#a190b8b21e481538bab2eb3800aaf84f0", null ],
      [ "txRingLen", "a00017.html#ae5a88ae171688c9e8cc729e59b9424e7", null ]
    ] ],
    [ "enet_rx_bd_ring_t", "a00017.html#a00270", [
      [ "rxBdBase", "a00017.html#a9b645c4be993309d06f1ffed6c951c45", null ],
      [ "rxGenIdx", "a00017.html#a3358045d4fa5d0656a5972dc6aea7b03", null ],
      [ "rxRingLen", "a00017.html#a8cc38f123dc2aca3c0728d37e8c1c7f5", null ]
    ] ],
    [ "enet_handle_t", "a00017.html#a00210", [
      [ "rxBdRing", "a00017.html#ae902f3f66d8970f7e0e401c93a810732", null ],
      [ "txBdRing", "a00017.html#a5213f4eb065024353d45992c4f9d6644", null ],
      [ "rxBuffSizeAlign", "a00017.html#a7b098c577f9a8c2702c3d27b3d48e5b6", null ],
      [ "txBuffSizeAlign", "a00017.html#a22354125866a1d17a62681722af66df2", null ],
      [ "rxMaintainEnable", "a00017.html#aa2ee8b12d860432b23eba5ac3eebc792", null ],
      [ "txMaintainEnable", "a00017.html#acbe9f80852a1c0a05c87e6c57182a296", null ],
      [ "ringNum", "a00017.html#a2f88d8370908963027e3a505926e5baf", null ],
      [ "callback", "a00017.html#ab6f1673b4b3b633bd4e6b0fa8732ea58", null ],
      [ "userData", "a00017.html#a0fca53e60f7e5646f409633651d8e249", null ],
      [ "txDirtyRing", "a00017.html#ab6a254e4c93ec94fbb21210b28cefab9", null ],
      [ "TxReclaimEnable", "a00017.html#a04aa0341ff05c88aefe6a3cd018116db", null ]
    ] ],
    [ "FSL_ENET_DRIVER_VERSION", "a00017.html#ga869f211125798c5e1f17464dee22704e", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_EMPTY_MASK", "a00017.html#ga4ecdb738a6f27b81eb9ad44d24d2f1db", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_SOFTOWNER1_MASK", "a00017.html#gac3815af5aedc53cf345ae5186f711d6d", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_WRAP_MASK", "a00017.html#ga37f7e7094697aa06285df27da4e3791f", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_SOFTOWNER2_Mask", "a00017.html#ga6097b5e5b8015de197db0e54cbb5425f", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_LAST_MASK", "a00017.html#gae302c57c88bade74af59c4bcfcac7d0f", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_MISS_MASK", "a00017.html#gad622789c0bb27a6ac2ab54e3526d2712", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_BROADCAST_MASK", "a00017.html#gae4cfa2a92c961ee34445976e2949c00d", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_MULTICAST_MASK", "a00017.html#gaf47a7a6cf15a885878a39749f9d645ed", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_LENVLIOLATE_MASK", "a00017.html#ga7b3cbc3ed367bd8fcbcbb6bcc14ef06f", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_NOOCTET_MASK", "a00017.html#ga67881a213531011e78cc56a3ac017549", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_CRC_MASK", "a00017.html#ga4f57d5345b3a3f349e834e0d46645ce3", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_OVERRUN_MASK", "a00017.html#ga31d458f38d3123c1eb398bf57d1ebacc", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_TRUNC_MASK", "a00017.html#ga9e3e6bac667500c8ff096be418e7a0e1", null ],
    [ "ENET_BUFFDESCRIPTOR_TX_READY_MASK", "a00017.html#ga842251a5e8c62968a87578698f0dd083", null ],
    [ "ENET_BUFFDESCRIPTOR_TX_SOFTOWENER1_MASK", "a00017.html#gae76d465c3a9f07b28f48433022a005cc", null ],
    [ "ENET_BUFFDESCRIPTOR_TX_WRAP_MASK", "a00017.html#ga159bc70ce067d81c7b44917f16ab596e", null ],
    [ "ENET_BUFFDESCRIPTOR_TX_SOFTOWENER2_MASK", "a00017.html#ga09c9ab0c2b634f6e97df4e5b5c4bc8a1", null ],
    [ "ENET_BUFFDESCRIPTOR_TX_LAST_MASK", "a00017.html#ga59497a4cfa4e8df8ceb6e6b39549ea1d", null ],
    [ "ENET_BUFFDESCRIPTOR_TX_TRANMITCRC_MASK", "a00017.html#ga4119af7a03ab546888a3853f228b09bd", null ],
    [ "ENET_BUFFDESCRIPTOR_RX_ERR_MASK", "a00017.html#gaa47652ada5e7cc078bc37979d5487b46", null ],
    [ "ENET_FRAME_MAX_FRAMELEN", "a00017.html#ga4fa46b5ee409f6d147980adc57493f6d", null ],
    [ "ENET_FIFO_MIN_RX_FULL", "a00017.html#gae9e50e322b991831fd71514002a3ca7b", null ],
    [ "ENET_RX_MIN_BUFFERSIZE", "a00017.html#gaedbdd29c8a3e25c856b42f13edebcd8d", null ],
    [ "ENET_PHY_MAXADDRESS", "a00017.html#ga1f4edc29c5f534c4bd8f1afbd0185a4f", null ],
    [ "ENET_TX_INTERRUPT", "a00017.html#gabcfe9d54430081cd436f002f4912e6b0", null ],
    [ "ENET_RX_INTERRUPT", "a00017.html#ga884cb09f25caa75519ab5514393cc118", null ],
    [ "ENET_TS_INTERRUPT", "a00017.html#ga1542982978e8f2293acbbf1a989d7fdb", null ],
    [ "ENET_ERR_INTERRUPT", "a00017.html#gaf207b6aa1230056b8daeca5ccb0fe8fd", null ],
    [ "ENET_TX_LAST_BD_FLAG", "a00017.html#ga8bc487c350f8db5da16c1a963340afcd", null ],
    [ "ENET_TX_TIMESTAMP_FLAG", "a00017.html#gaa7ebd4303c1ce37dce75bbcd84d4bbeb", null ],
    [ "enet_callback_t", "a00017.html#ga8e1d2f2c373688f7bc76c47bd82c1f42", null ],
    [ "enet_isr_ring_t", "a00017.html#ga7c55db60b8e1c43d5331c70c414e950e", [
      [ "kStatus_ENET_RxFrameError", "a00017.html#gga0411cd49bb5b71852cecd93bcbf0ca2daef1f945a6dc8fcf6267d57aac2a19f99", null ],
      [ "kStatus_ENET_RxFrameFail", "a00017.html#gga0411cd49bb5b71852cecd93bcbf0ca2da97bf0aacb16c8874c7a0a016483cb2ec", null ],
      [ "kStatus_ENET_RxFrameEmpty", "a00017.html#gga0411cd49bb5b71852cecd93bcbf0ca2da50e097caecebfb4afacf2c8a667a5409", null ],
      [ "kStatus_ENET_TxFrameOverLen", "a00017.html#gga0411cd49bb5b71852cecd93bcbf0ca2daf12461c772f3ff70fc5a8664bb49701e", null ],
      [ "kStatus_ENET_TxFrameBusy", "a00017.html#gga0411cd49bb5b71852cecd93bcbf0ca2dad15b9b2af39f28f90889bb19f568e844", null ],
      [ "kStatus_ENET_TxFrameFail", "a00017.html#gga0411cd49bb5b71852cecd93bcbf0ca2da34b4c8ff24db933516a0cf13fc8174ad", null ]
    ] ],
    [ "enet_mii_mode_t", "a00017.html#ga4ae0699c0a7f9706deffbaf201025669", [
      [ "kENET_MiiMode", "a00017.html#gga4ae0699c0a7f9706deffbaf201025669a8625ad828cb3aae19fa0c2e6934e9368", null ],
      [ "kENET_RmiiMode", "a00017.html#gga4ae0699c0a7f9706deffbaf201025669ae44236ebbdfcc0ae1e3520edd3d2d602", null ],
      [ "kENET_RgmiiMode", "a00017.html#gga4ae0699c0a7f9706deffbaf201025669a328940b870cfaeea0b58ea75d9db2508", null ]
    ] ],
    [ "enet_mii_speed_t", "a00017.html#ga8bbf729066c3400712a19ed1d9179e4c", [
      [ "kENET_MiiSpeed10M", "a00017.html#gga8bbf729066c3400712a19ed1d9179e4ca6e8f095a5a1944d54425565b5beb835c", null ],
      [ "kENET_MiiSpeed100M", "a00017.html#gga8bbf729066c3400712a19ed1d9179e4ca267390f53c987b908852257bf5407e8e", null ],
      [ "kENET_MiiSpeed1000M", "a00017.html#gga8bbf729066c3400712a19ed1d9179e4ca5316558aff9aeda0549352020c1e6744", null ]
    ] ],
    [ "enet_mii_duplex_t", "a00017.html#ga0784f279168ea4e3fc2fc07018dcb9bf", [
      [ "kENET_MiiHalfDuplex", "a00017.html#gga0784f279168ea4e3fc2fc07018dcb9bfad3b58af3cb1b983f8e3cd45b585c91b9", null ],
      [ "kENET_MiiFullDuplex", "a00017.html#gga0784f279168ea4e3fc2fc07018dcb9bfa0d2ad2c3708231614c716bc921503d6c", null ]
    ] ],
    [ "enet_mii_write_t", "a00017.html#ga0efd18bb4f4b754039fc30c440e38b02", [
      [ "kENET_MiiWriteNoCompliant", "a00017.html#gga0efd18bb4f4b754039fc30c440e38b02afa74c106f9ed2436e47a5c3f54382b71", null ],
      [ "kENET_MiiWriteValidFrame", "a00017.html#gga0efd18bb4f4b754039fc30c440e38b02a1611c88e328da10f5c43bd138eca6794", null ]
    ] ],
    [ "enet_mii_read_t", "a00017.html#ga9c0264e7da8e7d0a3ead667d3a7b1a89", [
      [ "kENET_MiiReadValidFrame", "a00017.html#gga9c0264e7da8e7d0a3ead667d3a7b1a89a25d7fb88a8252dc7250617be5ea78f91", null ],
      [ "kENET_MiiReadNoCompliant", "a00017.html#gga9c0264e7da8e7d0a3ead667d3a7b1a89a3a3402b126399caf1ad17a2981f69a14", null ]
    ] ],
    [ "enet_mii_extend_opcode", "a00017.html#ga67777b636234c2c556b6d0b1f52a4662", [
      [ "kENET_MiiAddrWrite_C45", "a00017.html#gga67777b636234c2c556b6d0b1f52a4662aa031e39c75c2ab6c27c06f447338446b", null ],
      [ "kENET_MiiWriteFrame_C45", "a00017.html#gga67777b636234c2c556b6d0b1f52a4662abc5c4c556438c39c9d2578254431512b", null ],
      [ "kENET_MiiReadFrame_C45", "a00017.html#gga67777b636234c2c556b6d0b1f52a4662a06eec19796c92e001ad6cc728fc3139d", null ]
    ] ],
    [ "enet_special_control_flag_t", "a00017.html#ga3dd434e4f34bd4c640cefd471763e834", [
      [ "kENET_ControlFlowControlEnable", "a00017.html#gga3dd434e4f34bd4c640cefd471763e834a2274920ae245b67edc1538ecc662e2e7", null ],
      [ "kENET_ControlRxPayloadCheckEnable", "a00017.html#gga3dd434e4f34bd4c640cefd471763e834a9493b832848510c47488327ef49e4d09", null ],
      [ "kENET_ControlRxPadRemoveEnable", "a00017.html#gga3dd434e4f34bd4c640cefd471763e834aa29ba1cc644bf602ffc8ef9e1ae02892", null ],
      [ "kENET_ControlRxBroadCastRejectEnable", "a00017.html#gga3dd434e4f34bd4c640cefd471763e834ade873dafe5c7263f8cc62b0ca92aada3", null ],
      [ "kENET_ControlMacAddrInsert", "a00017.html#gga3dd434e4f34bd4c640cefd471763e834ac806eb5baebf350b694cca943bc812c7", null ],
      [ "kENET_ControlStoreAndFwdDisable", "a00017.html#gga3dd434e4f34bd4c640cefd471763e834abb1b113283cf4f67722599cc58803643", null ],
      [ "kENET_ControlSMIPreambleDisable", "a00017.html#gga3dd434e4f34bd4c640cefd471763e834a8eb7a5389fe9cf0a867066be878efcf1", null ],
      [ "kENET_ControlPromiscuousEnable", "a00017.html#gga3dd434e4f34bd4c640cefd471763e834a51af87f0cfef162bc4c48fd0884c0cab", null ],
      [ "kENET_ControlMIILoopEnable", "a00017.html#gga3dd434e4f34bd4c640cefd471763e834a8cfbb36dc3a0bebf378ed53d527e93af", null ],
      [ "kENET_ControlVLANTagEnable", "a00017.html#gga3dd434e4f34bd4c640cefd471763e834a3553f9aa0fdc655ffff8e0f46f6cb4b7", null ],
      [ "kENET_ControlSVLANEnable", "a00017.html#gga3dd434e4f34bd4c640cefd471763e834a66bfcdd50c45054155400c293c8f7501", null ],
      [ "kENET_ControlVLANUseSecondTag", "a00017.html#gga3dd434e4f34bd4c640cefd471763e834a50883b277ca19e01d74fe86d144fc453", null ]
    ] ],
    [ "enet_interrupt_enable_t", "a00017.html#gafb9d440ac05cadfab906714b2db65027", [
      [ "kENET_BabrInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a2723f07cc888d945f74650566d79e82e", null ],
      [ "kENET_BabtInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a103227b91492fa90cf41212e63b1e7ae", null ],
      [ "kENET_GraceStopInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a1a3e80425de2ce87abc060cef41d1f9e", null ],
      [ "kENET_TxFrameInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a7b2529920e9b97d937aa6b420bf1d51f", null ],
      [ "kENET_TxBufferInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027ab48679949090d31d9245d28f4b8ac31e", null ],
      [ "kENET_RxFrameInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a35d716ce614f33b7afbcf168922f1e70", null ],
      [ "kENET_RxBufferInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027af4e8f4292fde8f09ade517e91ac8baa7", null ],
      [ "kENET_MiiInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027af14e66a1e3dd261481ae560fb2794340", null ],
      [ "kENET_EBusERInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027ace73af088e05b63d6f8d6aeda6a9908e", null ],
      [ "kENET_LateCollisionInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a1495716c4d2b819469d0243c3768eac1", null ],
      [ "kENET_RetryLimitInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a39343a8e490ffbc2146a517b8c4a82b2", null ],
      [ "kENET_UnderrunInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a1fa3a1323a0da32594d84172db1e95ed", null ],
      [ "kENET_PayloadRxInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027aefe7250848088c6a514d609ff1bd6b2c", null ],
      [ "kENET_WakeupInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a25974ac3cc05e3d928eab800a0f09c27", null ],
      [ "kENET_RxFlush2Interrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a984e7cb2082f915b6e2f82ab3591865f", null ],
      [ "kENET_RxFlush1Interrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a999bdf2012fa309ba75dbd5992d26104", null ],
      [ "kENET_RxFlush0Interrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a84652e297101a46dd22122897c37d40e", null ],
      [ "kENET_TxFrame2Interrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a8a725ae1f7ed288309f90cc4f4f805a4", null ],
      [ "kENET_TxBuffer2Interrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a17a2cd0a31b476eb2f7e039c457f1f93", null ],
      [ "kENET_RxFrame2Interrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a2d099ed9864ff29e3e30fc73b6761213", null ],
      [ "kENET_RxBuffer2Interrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a2486028c1f1d063cbc4333fae8ca257a", null ],
      [ "kENET_TxFrame1Interrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a91d9b4695b11378f71e0e9375b7b6be9", null ],
      [ "kENET_TxBuffer1Interrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a1360e78db528b610141ce961317efbe2", null ],
      [ "kENET_RxFrame1Interrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027abfe13d4646b280ca2719c8f1d7cbd431", null ],
      [ "kENET_RxBuffer1Interrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a5355013899b206f7a9de91a4f37bbcdc", null ],
      [ "kENET_TsAvailInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a9bd0bb3fb86f1c342bbcc3f2407e3e06", null ],
      [ "kENET_TsTimerInterrupt", "a00017.html#ggafb9d440ac05cadfab906714b2db65027a7bdae7cedb0c8ca1087feb1511b1bb1c", null ]
    ] ],
    [ "enet_event_t", "a00017.html#gab6a6012153064f5996a44ecb79559fbe", [
      [ "kENET_RxEvent", "a00017.html#ggab6a6012153064f5996a44ecb79559fbea0ef30a1e4757622d27d6ca879f300cb6", null ],
      [ "kENET_TxEvent", "a00017.html#ggab6a6012153064f5996a44ecb79559fbeaae83f9ee29da3fe085f4d1e24983bef7", null ],
      [ "kENET_ErrEvent", "a00017.html#ggab6a6012153064f5996a44ecb79559fbea1b4966d24ea40b037e7f0e1022441ea7", null ],
      [ "kENET_WakeUpEvent", "a00017.html#ggab6a6012153064f5996a44ecb79559fbea6e0c81e642fcb382d2f38ad32a32ec07", null ],
      [ "kENET_TimeStampEvent", "a00017.html#ggab6a6012153064f5996a44ecb79559fbea2d4e884e83838e4bd8985b0c846e2844", null ],
      [ "kENET_TimeStampAvailEvent", "a00017.html#ggab6a6012153064f5996a44ecb79559fbea5f3aa0c8f959a838732c6a38965a1e2a", null ]
    ] ],
    [ "enet_idle_slope_t", "a00017.html#ga247a86c186345c42a52fe84c03abc0ac", [
      [ "kENET_IdleSlope1", "a00017.html#gga247a86c186345c42a52fe84c03abc0aca04033ca03d5d9d5c61117d7936b17b50", null ],
      [ "kENET_IdleSlope2", "a00017.html#gga247a86c186345c42a52fe84c03abc0acae678fdd108e34a4b9b5c792261f35820", null ],
      [ "kENET_IdleSlope4", "a00017.html#gga247a86c186345c42a52fe84c03abc0acacb4aaeef98c1e3c7e261e8a218b0d7ce", null ],
      [ "kENET_IdleSlope8", "a00017.html#gga247a86c186345c42a52fe84c03abc0aca7f3139485318a9216dd645fed0189278", null ],
      [ "kENET_IdleSlope16", "a00017.html#gga247a86c186345c42a52fe84c03abc0aca1969c622005470c7bc19907d63f3f5d8", null ],
      [ "kENET_IdleSlope32", "a00017.html#gga247a86c186345c42a52fe84c03abc0aca9224b07ced5e253a1976f6fe60b02744", null ],
      [ "kENET_IdleSlope64", "a00017.html#gga247a86c186345c42a52fe84c03abc0aca331b747b2752f378fe9bdb9b5eda0342", null ],
      [ "kENET_IdleSlope128", "a00017.html#gga247a86c186345c42a52fe84c03abc0aca3360b6feddb24c94b3651f3379bb73f6", null ],
      [ "kENET_IdleSlope256", "a00017.html#gga247a86c186345c42a52fe84c03abc0acaf6dd991f634aeef881b87e075f9a2c92", null ],
      [ "kENET_IdleSlope384", "a00017.html#gga247a86c186345c42a52fe84c03abc0aca36acde74c68d781d504bf2a47b63d760", null ],
      [ "kENET_IdleSlope512", "a00017.html#gga247a86c186345c42a52fe84c03abc0acae092f57fead6bcdb72d3cb9fc8aaec46", null ],
      [ "kENET_IdleSlope640", "a00017.html#gga247a86c186345c42a52fe84c03abc0acaed17d44b808a371659df4bef1a6e5771", null ],
      [ "kENET_IdleSlope768", "a00017.html#gga247a86c186345c42a52fe84c03abc0aca78e969509be12228009189c2390e4c4e", null ],
      [ "kENET_IdleSlope896", "a00017.html#gga247a86c186345c42a52fe84c03abc0aca5fa246d63f8cd57fbbef1ee26b6fd7dd", null ],
      [ "kENET_IdleSlope1024", "a00017.html#gga247a86c186345c42a52fe84c03abc0aca7bf6e8015195331c15dbed4f001fa715", null ],
      [ "kENET_IdleSlope1152", "a00017.html#gga247a86c186345c42a52fe84c03abc0acae33451cf72e81e3d0482fb8f7be76997", null ],
      [ "kENET_IdleSlope1280", "a00017.html#gga247a86c186345c42a52fe84c03abc0aca645869434cd6f3f4830d417dd1ecf49d", null ],
      [ "kENET_IdleSlope1408", "a00017.html#gga247a86c186345c42a52fe84c03abc0acadcc73849ca2d1d0a21207a175cefdb66", null ],
      [ "kENET_IdleSlope1536", "a00017.html#gga247a86c186345c42a52fe84c03abc0aca12d07d00c78203510bee838beb3764dd", null ]
    ] ],
    [ "enet_tx_accelerator_t", "a00017.html#ga5ab4bff47ce41714000c94e1f5a8a6a8", [
      [ "kENET_TxAccelIsShift16Enabled", "a00017.html#gga5ab4bff47ce41714000c94e1f5a8a6a8a7db407a277c41ca9d215412e2ef05476", null ],
      [ "kENET_TxAccelIpCheckEnabled", "a00017.html#gga5ab4bff47ce41714000c94e1f5a8a6a8ad2f2ea0738c6b7fcaee5e02f8f1a8645", null ],
      [ "kENET_TxAccelProtoCheckEnabled", "a00017.html#gga5ab4bff47ce41714000c94e1f5a8a6a8aa85f2b263781a1c43c304c3f380556ae", null ]
    ] ],
    [ "enet_rx_accelerator_t", "a00017.html#gaaa83596ca3d01b86f8da9e7e2c90cced", [
      [ "kENET_RxAccelPadRemoveEnabled", "a00017.html#ggaaa83596ca3d01b86f8da9e7e2c90cceda55ba5425899621f83b28c0c8e61b9060", null ],
      [ "kENET_RxAccelIpCheckEnabled", "a00017.html#ggaaa83596ca3d01b86f8da9e7e2c90cceda517175d18302c670ad3b0999a9a1c9b1", null ],
      [ "kENET_RxAccelProtoCheckEnabled", "a00017.html#ggaaa83596ca3d01b86f8da9e7e2c90cceda122f314d9f24c28b18ce350398fcce98", null ],
      [ "kENET_RxAccelMacCheckEnabled", "a00017.html#ggaaa83596ca3d01b86f8da9e7e2c90cceda3082dc2e884e8b71a82f857c9f24890d", null ],
      [ "kENET_RxAccelisShift16Enabled", "a00017.html#ggaaa83596ca3d01b86f8da9e7e2c90cceda659e8b06edb4f6944c9969dd56649b89", null ]
    ] ],
    [ "ENET_GetInstance", "a00017.html#ga50f498499f0ae949895298dee8ce3683", null ],
    [ "ENET_GetDefaultConfig", "a00017.html#gaf0992a0c9c3a27b2a40226ac38a26d1e", null ],
    [ "ENET_Up", "a00017.html#ga4b8041bc0a1754da1f28b7823c63452c", null ],
    [ "ENET_Init", "a00017.html#gac3ebae64ff0908b9315aa4c3c27689a3", null ],
    [ "ENET_Down", "a00017.html#gac1cc2627749a65945a76703cd2afb90b", null ],
    [ "ENET_Deinit", "a00017.html#ga72f7e3493a2f4134324e9e72492bdbbc", null ],
    [ "ENET_Reset", "a00017.html#ga809c3f91a850b53afa5511603b1c91df", null ],
    [ "ENET_SetMII", "a00017.html#ga9008a47cdf43fe2eddde467c9841fc7b", null ],
    [ "ENET_SetSMI", "a00017.html#ga4e2546cfd538bd06950f2145592858f1", null ],
    [ "ENET_GetSMI", "a00017.html#ga95deb3a7ea7873830ed7b65cabe93b88", null ],
    [ "ENET_ReadSMIData", "a00017.html#ga1720662e45648e0f081b9152c36b3156", null ],
    [ "ENET_StartSMIRead", "a00017.html#ga4b0247aa4825019f9939b2e468cf5758", null ],
    [ "ENET_StartSMIWrite", "a00017.html#ga0ef39cbb1042eb31189cf59fb3509b9a", null ],
    [ "ENET_StartExtC45SMIRead", "a00017.html#ga1a4f1800a2d7b5dc67c952d86ecf1a30", null ],
    [ "ENET_StartExtC45SMIWrite", "a00017.html#gabab9ad8bf84c6f1347dab6c75674858e", null ],
    [ "ENET_StartExtC45SMIWriteReg", "a00017.html#ga6601bffb2a8311822270a4323acfaa16", null ],
    [ "ENET_StartExtC45SMIWriteData", "a00017.html#gaad26a89ca24a894dcde3b3a4dbe93140", null ],
    [ "ENET_StartExtC45SMIReadData", "a00017.html#ga47ae815be6052df98fc84b0d523e76b2", null ],
    [ "ENET_SetRGMIIClockDelay", "a00017.html#ga3f71765d8252bb8aeecbe537d4e9bd93", null ],
    [ "ENET_SetMacAddr", "a00017.html#ga924622a35ef81eaf69d4a4fd9302a7be", null ],
    [ "ENET_GetMacAddr", "a00017.html#ga89e5a62af8d1ebf7359faa1fc13b56bc", null ],
    [ "ENET_AddMulticastGroup", "a00017.html#ga5b9495b14a42f5b1ee24dcc5a6a9f227", null ],
    [ "ENET_LeaveMulticastGroup", "a00017.html#ga2aa6b359b811460a6fb9a2588688bf30", null ],
    [ "ENET_ActiveRead", "a00017.html#ga6e067d2d9b41ad32ce7b32ecad8cefc3", null ],
    [ "ENET_EnableSleepMode", "a00017.html#ga9a7bb3eb9a6be017e21ce53f2343e8bf", null ],
    [ "ENET_GetAccelFunction", "a00017.html#ga8d32189b130fbca31cdee7ceb57bf543", null ],
    [ "ENET_EnableInterrupts", "a00017.html#gad9e530c5904c36e8f23fe22f8c63651b", null ],
    [ "ENET_DisableInterrupts", "a00017.html#ga6a6f1de5e8f1dd09d217244899c3c8db", null ],
    [ "ENET_GetInterruptStatus", "a00017.html#ga9b9f5a57ff20ccf83fc8887c1bba2cec", null ],
    [ "ENET_ClearInterruptStatus", "a00017.html#ga98676acb368ed3d238278b4ede220469", null ],
    [ "ENET_SetRxISRHandler", "a00017.html#gae21103f805617333f0f15edf94f895a6", null ],
    [ "ENET_SetTxISRHandler", "a00017.html#ga156266b1c44108aa777dc218164b74e0", null ],
    [ "ENET_SetErrISRHandler", "a00017.html#gaa4533115d3b695265422584bc6964756", null ],
    [ "ENET_SetCallback", "a00017.html#gae529b5e69f900ed93741a14265eee8fa", null ],
    [ "ENET_GetRxErrBeforeReadFrame", "a00017.html#gae8d5c96025f7b1b870e5eb20850dfa87", null ],
    [ "ENET_GetRxFrameSize", "a00017.html#gab60f9fac51313d5822274a20bb059307", null ],
    [ "ENET_ReadFrame", "a00017.html#gabcf878c71dccf0e4307abeb05c60067f", null ],
    [ "ENET_SendFrame", "a00017.html#ga420eb9f89621426669164f9ff3ded4b7", null ],
    [ "ENET_SetTxReclaim", "a00017.html#gaa63f1bef0380a6ee9370e9ed90020173", null ],
    [ "ENET_GetRxBuffer", "a00017.html#ga1f16f0092b6ef1fba801e2e8c9d239a8", null ],
    [ "ENET_ReleaseRxBuffer", "a00017.html#ga04ebc7e30a4a0bf462b6f2213960fa87", null ],
    [ "ENET_SendFrameZeroCopy", "a00017.html#gac45cf977f493add878dbfc7082074c98", null ],
    [ "ENET_SetTxBuffer", "a00017.html#ga5f84617c1bd92280026be9798d7cf119", null ],
    [ "ENET_TransmitIRQHandler", "a00017.html#ga33eb824d276346cda1775b5611f5bae4", null ],
    [ "ENET_ReceiveIRQHandler", "a00017.html#gaf00cb8dc4b85aa7fd7346529c37a3a5a", null ],
    [ "ENET_CommonFrame1IRQHandler", "a00017.html#ga68bc9d588566a5f628e9a34168aa7c21", null ],
    [ "ENET_CommonFrame2IRQHandler", "a00017.html#gabbc7e1d641be3c50d3662915586e2776", null ],
    [ "ENET_ErrorIRQHandler", "a00017.html#ga684127bd7163faf3458f07a021ceb448", null ],
    [ "ENET_CommonFrame0IRQHandler", "a00017.html#ga9ec95f044ec27e9e0c5f060b856744d3", null ]
];