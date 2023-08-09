const middleAlertsColumn = [
    {
        name: "BK",
        info: 'Контакт от электродвигателя - "Запрет выполнения команд при обесточивании"',
        state: false,
    },
    {
        name: "FCC",
        info: 'Контакт от коммуникационного устройства - "Неисправность схемы управления"',
        state: false,
    },
    {
        name: 'FCO',
        info: 'Неисправность - "Несоответствие состояния вместо Отключено-Включено"',
        state: true,
    },
    {
        name: "FCOM",
        info: "Неисправность командных выходов",
        state: false,
    },
    {
        name: 'FDT',
        info: 'Неисправность - "Двойное превышение времени хода"',
        state: false,
    },
    {
        name: "FOC",
        info: 'Неисправность - "Несоответствие состояния вместо Включено-Отключено"',
        state: false,
    },
    {
        name: "FPS",
        info: 'Неисправность обратных связей концевых выключателей',
        state: false,
    },
    {
        name: "FR",
        info: 'Входная команда блокирована',
        state: false,
    },
    {
        name: "FTC",
        info: 'Неисправность - "Превышение времени хода в направлении Отключено"',
        state: false,
    },
    {
        name: 'FTO',
        info: 'Неисправность - "Превышение времени хода в направлении Включено"',
        state: false,
    },
    {
        name: "GND",
        info: 'Выход - "Управляемая земля"',
        state: false,
    },
    {
        name: "HS",
        info: 'Сигнал квитирования',
        state: false,
    },
    {
        name: 'IFCO',
        info: 'Внутренний сигнал FCO',
        state: false,
    },
    {
        name: "IFOC",
        info: "Внутренний сигнал FOC",
        state: false,
    },
    {
        name: "IFPS",
        info: 'Внутренний сигнал IFPS',
        state: false,
    },
    {
        name: "IFTC",
        info: 'Внутренний сигнал IFTC',
        state: true,
    },
    {
        name: 'IFTO',
        info: 'Внутренний сигнал IFTO',
        state: false,
    },
    {
        name: 'ISHS',
        info: 'Сигнал инициализации',
        state: false,
    },
    {
        name: 'KC',
        info: 'Контакт от электродвигателя - "Обесточивание"',
        state: false,
    },
    {
        name: 'TEST',
        info: 'Контакт от коммуникационного устройства - "Тестовое положение"',
        state: false,
    },
    {
        name: 'NTEST',
        info: 'Свободный вход снимающий TEST',
        state: false,
    },
    {
        name: "RULV",
        info: 'Сигнал подтверждения от СВБУ',
        state: false,
    },
    {
        name: "LODF",
        info: 'Выход на лампу ТС ОДУ - "Неисправность"',
        state: false,
    },
    {
        name: "LODF1",
        info: 'Постоянный сигнал на лампу ТС ОДУ- "Неисправность"',
        state: false,
    },
    {
        name: "LODF2",
        info: 'Мигающий сигнал на лампу ТС ОДУ- "Неисправность"',
        state: false,
    },
    {
        name: "LT",
        info: 'Контакт от ТС ОДУ - "Тест ламп"',
        state: false,
    },
    {
        name: "RODV",
        info: 'Контакт подтверждения от ТС ОДУ',
        state: false,
    },
    {
        name: "RCB",
        info: 'Контакт от местного пункта управления - "Местное управление"',
        state: false,
    },
    {
        name: 'RCBV',
        info: 'Контакт подтверждения от местного пункта управления',
        state: false,
    },
    {
        name: "RCPV",
        info: 'Вход подтверждения от МЩУ',
        state: false,
    },
]

export default middleAlertsColumn;