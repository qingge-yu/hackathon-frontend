import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ setLanguage, language }) {

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="English"
                    label="Language"
                    onChange={handleChange}
                >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Español</MenuItem>
                    <MenuItem value="ar">عربي</MenuItem>
                    <MenuItem value="ja">日本語</MenuItem>
                    <MenuItem value="fr">Français</MenuItem>
                    <MenuItem value="de">Deutsch</MenuItem>
                    <MenuItem value="hi">हिन्दी</MenuItem>
                    <MenuItem value="it">Italiano</MenuItem>
                    <MenuItem value="zh-CN">中文简体</MenuItem>
                    <MenuItem value="zh-TW">中文繁體</MenuItem>
                    <MenuItem value="ko">한국인</MenuItem>
                    <MenuItem value="tl">Tagalog</MenuItem>
                    <MenuItem value="vi">Tiếng Việt</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
